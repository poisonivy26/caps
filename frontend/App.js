// In App.js in a new project

import React from 'react';
import {View, Text, Button, TextInput, Safe} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Patient Imports
import PatientLogin from './screens/Patient/PatientLogin';
import PatientRegister from './screens/Patient/PatientRegister';
import DoctorList from './screens/Patient/DoctorList';
import DoctorInformation from './screens/Patient/DoctorInformation';
import CreateAppointment from './screens/Patient/CreateAppointment';
import Landing from './screens/Patient/Landing';
import Dashboard from './screens/Dashboard';
import Message from './screens/Patient/Messages';
import Prescriptions from './screens/Patient/Prescriptions';
import FindDoctor from './screens/Patient/FindDoctor';
import AppointmentDatePicker from './screens/Patient/AppointmentDatePicker';
import AppointmentSummary from './screens/Patient/AppointmentSummary';

import PrescriptionDetails from './screens/Patient/PrescriptionDetails';

import PatientProfile from './screens/Patient/PatientProfile';

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard Screen" component={Dashboard} />
      <Drawer.Screen name="Patient Profile" component={PatientProfile} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="SulongPinoy" component={PatientLogin} />
        <RootStack.Screen
          name="PatientRegistrationScreen"
          component={PatientRegister}
        />

        <RootStack.Screen
          name="Dashboard Screen"
          component={HomeDrawer}
          options={{
            title: 'Patient Profile',
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('./icons/doctor.png')}
                style={[
                  focused ? styles.drawerActive : styles.drawerInActive,
                  {height: size, width: size},
                ]}
              />
            ),
          }}
        />
        <RootStack.Screen name="Find Doctor" component={FindDoctor} />
        <RootStack.Screen
          name="Create Appointment"
          component={CreateAppointment}
        />
        <RootStack.Screen name="Prescriptions" component={Prescriptions} />
        <RootStack.Screen name="Messaging" component={Message} />

        <RootStack.Screen name="Find a Doctor" component={FindDoctor} />
        <RootStack.Screen name="Doctor List" component={DoctorList} />
        <RootStack.Screen
          name="Doctor Information"
          component={DoctorInformation}
        />
        <RootStack.Screen
          name="Appointment Date Picker"
          component={AppointmentDatePicker}
        />
        <RootStack.Screen
          name="Appointment Summary"
          component={AppointmentSummary}
        />

        <RootStack.Screen name="Prescription List" component={Prescriptions} />
        <RootStack.Screen
          name="Prescription Details"
          component={PrescriptionDetails}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
