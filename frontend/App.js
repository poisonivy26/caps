// In App.js in a new project

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TextInput,
  Safe,
} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Patient Imports
import PatientLogin from './screens/Patient/PatientLogin';
import PatientRegister from './screens/Patient/PatientRegister';

// Find Doctor Stacks
import DoctorList from './screens/Patient/DoctorList';
import DoctorInformation from './screens/Patient/DoctorInformation';

import Landing from './screens/Patient/Landing';
import Dashboard from './screens/Dashboard';

import FindDoctor from './screens/Patient/FindDoctor';

// Appointments Imports
import CreateAppointment from './screens/Patient/CreateAppointment';
import AppointmentDatePicker from './screens/Patient/AppointmentDatePicker';
import AppointmentSummary from './screens/Patient/AppointmentSummary';

// Prescription Imports
import Prescriptions from './screens/Patient/Prescriptions';
import PrescriptionDetails from './screens/Patient/PrescriptionDetails';

import PatientProfile from './screens/Patient/PatientProfile';
import PatientRecentConsultations from './screens/Patient/PatientRecentConsultations';
import InsuranceCards from './screens/Patient/InsuranceCards';

// Messages imports
import Message from './screens/Patient/Messages';

const RootStack = createStackNavigator();

const FindDoctorStack = createStackNavigator();

const FindDoctorScreen = ({navigation}) => {
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

const AppointmentStack = createStackNavigator();

const AppointmentScreen = () => {
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

const PrescriptionStack = createStackNavigator();

const PrescriptionScreen = () => {
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

const MessageStack = createStackNavigator();
const MessageScreen = () => {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Messaging" component={Message} />
    </MessageStack.Navigator>
  );
};

const DashboardStack = createDrawerNavigator();

const DashboardScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      {/* <DashboardScreen.Screen name="FindDoctors" component={FindDoctorScreen}/> */}
    </DashboardStack.Navigator>
  );
};

function App({navigation}) {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isLoggedIn ? (
          <>
            <RootStack.Screen name="Sign in" component={PatientLogin} />
            <RootStack.Screen name="Sign up" component={PatientRegister} />
          </>
        ) : (
          <RootStack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={
              {
                // headerShown: false,
              }
            }
          />
        )}
        <RootStack.Screen
          name="Find Doctor"
          component={FindDoctorScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Create Appointment"
          component={AppointmentScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Prescriptions"
          component={PrescriptionScreen}
          options={{
            headerShown: false,
          }}
        />
          <RootStack.Screen
          name="Messaging"
          component={MessageScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
