import React from 'react';
import {FlatList, Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useGet} from '../../../src/hooks/useGet';
import {Profile} from '../../components/Profile';
const PatientProfile = ({navigation}) => {

    const user = useGet('user/')
  

  const onPressRecentConsultations = () => {
    navigation.navigate('Recent Consultations');
  }

  const onPressInsurance = () => {
    navigation.navigate('Insurance');
  }

  function renderProfile({item: profile}){
    return <Profile profile={profile} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}> User Profile Profile</Text>
      <Image style={styles.image} source={require('../../../doctor_images/doctor_profile.png')} />

            <Text>{user.email}</Text>
             <Text>{user?.patient_profile?.bio}</Text>
             <Text>{user?.patient_profile?.age}</Text>
             <Text>{user?.patient_profile?.first_name}</Text>
             <Text>{user?.patient_profile?.last_name}</Text>



      {/* Buttons */}

      <View>
        <TouchableOpacity style={styles.button} onPress={onPressRecentConsultations}>
          <Text>Recent Consultations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressInsurance}>
        <Text>Insurance Cards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  header:{
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

export default PatientProfile;
