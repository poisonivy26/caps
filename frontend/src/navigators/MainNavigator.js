import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//dashboard
import {Dashboard} from '../screens/PatientScreens/Dashboard';

//find doctor
import FindDoctor from '../screens/PatientScreens/FindDoctorScreens/FindDoctor';
import DoctorList from '../screens/PatientScreens/FindDoctorScreens/DoctorList';
import DoctorInformation from '../screens/PatientScreens/FindDoctorScreens/DoctorInformation';

// prescriptions
import PatientRecentConsultations from '../screens/PatientScreens/PrescriptionScreens/PatientRecentConsultations';
import InsuranceCards from '../screens/PatientScreens/PrescriptionScreens/InsuranceCards';
import Prescriptions from '../screens/PatientScreens/PrescriptionScreens/Prescriptions';
import PrescriptionDetails from '../screens/PatientScreens/PrescriptionScreens/PrescriptionDetails';

// Messages imports
import Message from '../screens/PatientScreens/MessageScreens/Messages';

// Appointments Imports
import CreateAppointment from '../screens/PatientScreens/AppointmentScreens/CreateAppointment';
import AppointmentDatePicker from '../screens/PatientScreens/AppointmentScreens/AppointmentDatePicker';
import AppointmentSummary from '../screens/PatientScreens/AppointmentScreens/AppointmentSummary';

const MainStack = createDrawerNavigator();

export function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Dashboard} />

      {/* find doctors */}
      <MainStack.Screen name="Find Doctor" component={FindDoctor} />
      <MainStack.Screen name="Doctor List" component={DoctorList} />
      <MainStack.Screen
        name="Doctor Information"
        component={DoctorInformation}
      />

      {/* prescriptions */}
      <MainStack.Screen
        name="Recent Consultations"
        component={PatientRecentConsultations}
      />
      <MainStack.Screen name="Insurance Cards" component={InsuranceCards} />
      <MainStack.Screen name="Prescriptions" component={Prescriptions} />
      <MainStack.Screen name="Prescription Details" component={PrescriptionDetails} />

      {/* messages */}
      <MainStack.Screen name="Message" component={Message} />



      {/* appointments */}
      <MainStack.Screen name="Create Appointment" component={CreateAppointment} />
      <MainStack.Screen name="Appointment Date Picker" component={AppointmentDatePicker} />
      <MainStack.Screen name="Appointment Summary" component={AppointmentSummary} />
    </MainStack.Navigator>
  );
}
