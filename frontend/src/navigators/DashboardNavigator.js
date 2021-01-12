import React from 'react';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {Dashboard} from '../screens/PatientScreens/Dashboard';
import FindDoctor from '../screens/PatientScreens/FindDoctorScreens/FindDoctor';

import {Button} from 'react-native';

import PatientProfile from '../screens/PatientScreens/PatientProfile';

import {AuthContext} from '../contexts/AuthContext';

const DashboardStack = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {logout} = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          logout();
        }}
      />
    </DrawerContentScrollView>
  );
}

export function DashboardNavigator() {
  return (
    <DashboardStack.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} options={{}} />
      )}>
      <DashboardStack.Screen
        name="Home"
        component={Dashboard}
      
      />
      <DashboardStack.Screen
        name="Patient Profile"
        component={PatientProfile}
      />
    </DashboardStack.Navigator>
  );
}
