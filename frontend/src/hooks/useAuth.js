import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

import EncryptedStorage from 'react-native-encrypted-storage';
import React from 'react';
import axios from 'axios';

import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';

export function useAuth() {
    const [state, dispatch] = React.useReducer(
      (state, action) => {
        switch (action.type) {
          case 'SET_USER':
            return {
              ...state,
              user: {...action.payload},
            };
          case 'REMOVE_USER':
            return {
              ...state,
              user: undefined,
            };
          case 'SET_LOADING':
            return {
              ...state,
              loading: action.payload,
            };
          default:
            return state;
        }
      },
      {
        user: undefined,
        loading: true,
      },
    );
    const auth = React.useMemo(
      () => ({
        login: async (email, password) => {
          const {data} = await axios.post(`${BASE_URL}login/`, {
            email: email,
            password,
          });
          const user = {
            email: data.email,
            token: data.access,
          };
          await EncryptedStorage.setItem('user', JSON.stringify(user));
          dispatch(createAction('SET_USER', user));
        },
        logout: async () => {
          await EncryptedStorage.removeItem('user');
          dispatch(createAction('REMOVE_USER'));
        },
        register: async (email, password, bio, age, first_name, last_name) => {

          await sleep(2000);

          let data = {
            bio: bio,
            age: age,
            first_name: first_name,
            last_name: last_name,
            

          }
          await axios.post(`${BASE_URL}register_patient/`, {
            email: email,
            password: password, 
            patient_profile: data
      
          
          }) .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error.response);
          });
        },
      }),
      [],
    );
    React.useEffect(() => {
      sleep(2000).then(() => {
        EncryptedStorage.getItem('user').then(user => {
          if (user) {
            dispatch(createAction('SET_USER', JSON.parse(user)));
          }
          dispatch(createAction('SET_LOADING', false));
        });
      });
    }, []);
    return {auth, state};
  }