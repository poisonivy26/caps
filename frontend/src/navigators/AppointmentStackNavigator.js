import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';



// Appointments Imports
import CreateAppointment from '../screens/PatientScreens/AppointmentScreens/CreateAppointment';
import AppointmentDatePicker from '../screens/PatientScreens/AppointmentScreens/AppointmentDatePicker';
import AppointmentSummary from '../screens/PatientScreens/AppointmentScreens/AppointmentSummary';



const AppointmentStack = createStackNavigator();

export function AppointmentNavigator () {
  return (
    <AppointmentStack.Navigator>
      <AppointmentStack.Screen
        name="Create Appointment"
        component={CreateAppointment}
      />
      <AppointmentStack.Screen
        name="Appointment Date Picker"
        component={AppointmentDatePicker}
      />

      <AppointmentStack.Screen
        name="Appointment Summary"
        component={AppointmentSummary}
      />
    </AppointmentStack.Navigator>
  );
};