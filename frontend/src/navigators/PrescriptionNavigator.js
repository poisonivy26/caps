import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import PatientRecentConsultations from './screens/Patient/PatientRecentConsultations';
import InsuranceCards from './screens/Patient/InsuranceCards';
import Prescriptions from './screens/Patient/Prescriptions';
import PrescriptionDetails from './screens/Patient/PrescriptionDetails';


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