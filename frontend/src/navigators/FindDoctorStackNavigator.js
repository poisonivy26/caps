import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';



// Find Doctor Stacks
import DoctorList from '../screens/PatientScreens/FindDoctorScreens/DoctorList';
import DoctorInformation from '../screens/PatientScreens/FindDoctorScreens/DoctorInformation';
import FindDoctor from '../screens/PatientScreens/FindDoctorScreens/FindDoctor';

const FindDoctorStack = createStackNavigator();

export function FindDoctorNavigator () {
  return (
    <FindDoctorStack.Navigator>
      <FindDoctorStack.Screen name="Find Doctor" component={FindDoctor} />
      <FindDoctorStack.Screen name="Doctor List" component={DoctorList} />
      <FindDoctorStack.Screen
        name="Doctor Information"
        component={DoctorInformation}
      />
    </FindDoctorStack.Navigator>
  );
};