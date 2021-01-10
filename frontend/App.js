// In App.js in a new project

import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TextInput,
  Safe,
} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
Navigation,
} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';




// navigator imports
import {AppointmentNavigator} from './src/navigators/AppointmentStackNavigator';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
import {DashboardNavigator} from './src/navigators/DashboardNavigator';
import {FindDoctorNavigator} from './src/navigators/FindDoctorStackNavigator';
import {MessageNavigator} from './src/navigators/MessageNavigator';
import {PrescriptionNavigator} from './src/navigators/PrescriptionNavigator';


// splash scren
import {SplashScreen} from './src/screens/SplashScreen';

// context imports
import {AuthContext} from './src/contexts/AuthContext';
import {UserContext} from './src/contexts/UserContext';

import {useAuth} from './src/hooks/useAuth';


const RootStack = createStackNavigator();



export default function () {
    const {auth, state} = useAuth();

    function renderScreens() {
      if (state.loading) {
        return <RootStack.Screen name="Splash" component={SplashScreen} />;
      }
      return state.user ? (
        <RootStack.Screen name={'Dashboard'}>
          {() => (
            <UserContext.Provider value={state.user}>
              <DashboardNavigator />
            </UserContext.Provider>
          )}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      );
    }

    return (
        <AuthContext.Provider value={auth}>
          <NavigationContainer>
            <RootStack.Navigator
              screenOptions={{
                headerShown: false,
                animationEnabled: false,
              }}>
              {renderScreens()}
            </RootStack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
    );
  

}

