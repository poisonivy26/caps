import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Dashboard} from  '../screens/PatientScreens/Dashboard';


const DashboardStack = createDrawerNavigator();

export function DashboardNavigator ()  {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
};
