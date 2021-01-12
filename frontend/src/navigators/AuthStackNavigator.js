import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import PatientLogin from '../screens/PatientScreens/AuthenticationScreens/PatientLogin';
import PatientRegister from '../screens/PatientScreens/AuthenticationScreens/PatientRegister';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return(
    <AuthStack.Navigator>
    <AuthStack.Screen name="Sign in" component={PatientLogin} />
    <AuthStack.Screen name="Sign up" component={PatientRegister} />
  </AuthStack.Navigator>
  )
}
