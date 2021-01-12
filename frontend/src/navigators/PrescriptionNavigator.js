import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import PatientRecentConsultations from '../screens/PatientScreens/PrescriptionScreens/PatientRecentConsultations';
import InsuranceCards from '../screens/PatientScreens/PrescriptionScreens/InsuranceCards';
import Prescriptions from '../screens/PatientScreens/PrescriptionScreens/Prescriptions';
import PrescriptionDetails from '../screens/PatientScreens/PrescriptionScreens/PrescriptionDetails';


const PrescriptionStack = createStackNavigator();

export function PrescriptionNavigator (){
  return (
    <PrescriptionStack.Navigator>
      <PrescriptionStack.Screen
        name="Prescriptions"
        component={Prescriptions}
      />
      <PrescriptionStack.Screen
        name="Prescription Details"
        component={PrescriptionDetails}
      />
    </PrescriptionStack.Navigator>
  );
};