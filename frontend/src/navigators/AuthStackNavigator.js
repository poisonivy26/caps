import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import PatientLogin from '../screens/PatientScreens/AuthenticationScreens/PatientLogin';
import PatientRegister from '../screens/PatientScreens/AuthenticationScreens/PatientRegister';

import DoctorLogin from '../Doctor/DoctorLogin';
import DoctorRegistration from '../Doctor/DoctorRegistration';


const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return(
    <AuthStack.Navigator>
    <AuthStack.Screen name="Sign in" component={PatientLogin} />
    <AuthStack.Screen name="Sign up" component={PatientRegister} />


    {/* Doctor Login */}
    <AuthStack.Screen name="Doctor Signin" component={DoctorLogin} />
    <AuthStack.Screen name="Doctor Signup" component={DoctorRegistration} />
  </AuthStack.Navigator>
  )
}
