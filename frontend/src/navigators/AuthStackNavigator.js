import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Patient Imports
import PatientLogin from './screens/Patient/PatientLogin';
import PatientRegister from './screens/Patient/PatientRegister';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sign in" component={PatientLogin} />
    <AuthStack.Screen name="Sign up" component={PatientRegister} />
  </AuthStack.Navigator>;
}
