// In App.js in a new project

import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Patient Imports
import PatientLogin from './screens/Patient/PatientLogin';
import PatientRegister from './screens/Patient/PatientRegister';
import FindDoctor from './screens/Patient/FindDoctor';
import DoctorList from './screens/Patient/DoctorList';
import DoctorInformation from './screens/Patient/DoctorInformation';
import CreateAppointment from './screens/Patient/CreateAppointment';
import Landing from './screens/Patient/Landing';

const RootStack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="SulongPinoy" component={PatientLogin} />
      <RootStack.Screen name="PatientRegistrationScreen" component={PatientRegister} />
    </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;