import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Dashboard} from  '../screens/PatientScreens/Dashboard';
import FindDoctor from '../screens/PatientScreens/FindDoctorScreens/FindDoctor';

const DashboardStack = createDrawerNavigator();

export function DashboardNavigator ()  {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Home" component={Dashboard} />
    </DashboardStack.Navigator>
  );
};
