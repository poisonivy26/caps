import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


import {AuthContext} from '../contexts/AuthContext';
import Header from './components/Header';

export function DoctorLogin({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('ivy1@gmail.com');
  const [password, setPassword] = React.useState('1234');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (


    <View style={styles.container}>

    {/* <Header header="Doctor Sign in" /> */}

      <View>
        <Text style={styles.text}>Doctor Sign In</Text>
      </View>

      <View style={styles.email}>
        <TextInput
          style={styles.input}
          value={email}
        onChangeText={setEmail}
          placeholder="Email"
        />
      </View>

      <View style={styles.password}>
        <TextInput
          style={styles.input}
          value={password}
        onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      {/* sign in button */}

      <View style={styles.signIn}>
        <TouchableOpacity style={styles.button}  onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}>
          <Text style={styles.buttonText}> Sign In </Text>
        </TouchableOpacity>
      </View>

      {/* Links */}

      <Text>
        Dont have an account?
        <TouchableOpacity
          onPress={() => navigation.navigate('Doctor Signup')}>
          <Text style={styles.links}>| Create Account</Text>
        </TouchableOpacity>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    color: '#19769f',
    fontSize: 35,
  },
  email: {},
  button: {
    alignItems: 'center',
    backgroundColor: '#19769f',
    padding: 15,
  },
  buttonText: {
    color: 'white',
  },
  signIn: {},
  links: {
    color: '#19769f',
  },
});

export default DoctorLogin;
