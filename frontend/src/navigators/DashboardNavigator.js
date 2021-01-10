import React from 'react';
import {createDrawerNavigator} from '@react-navigation/stack';

import Dashboard from './screens/Dashboard';


const DashboardStack = createDrawerNavigator();

export function DashboardNavigator ()  {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
};
