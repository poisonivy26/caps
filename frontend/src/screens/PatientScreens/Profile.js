import React, {Component} from 'react';
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useGet} from '../../hooks/useGet';
import {PatientProfile} from '../../components/PatientDetails';
import {DoctorProfile} from '../../components/DoctorDetails';

export function Profile ({navigation}) {
  const get_role = useGet('role/');
  const user = useGet('user/')
  let role = get_role.role;

  const onPressRecentConsultations = () => {
    navigation.navigate('Recent Consultations');
  };

  const onPressInsurance = () => {
    navigation.navigate('Insurance');

  };

  const getRole = (role) => {
    if (role === 2) {
      return <PatientProfile />;
    }
    if (role === 3) {
      return <DoctorProfile />;
    }
 ;}



  return (
    <View style={styles.container}>
      <Text style={styles.header}> User Profile</Text>
      <Image
        style={styles.image}
        source={require('../../../doctor_images/doctor_profile.png')}
      />

      <View>{role === 2 ? <PatientProfile /> : <DoctorProfile/>}</View>


      {/* Buttons */}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#19769f',
    fontSize: 25,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#19769f',
    padding: 15,
  },
  buttonText: {
    color: 'white',
  },
});

export default Profile;