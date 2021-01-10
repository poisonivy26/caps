import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';



// Appointments Imports
import CreateAppointment from './screens/Patient/CreateAppointment';
import AppointmentDatePicker from './screens/Patient/AppointmentDatePicker';
import AppointmentSummary from './screens/Patient/AppointmentSummary';


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