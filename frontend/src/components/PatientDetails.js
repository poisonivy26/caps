import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';


import {useGet} from '../hooks/useGet'

export function PatientProfile({}) {
    const user = useGet('user/')

  const onPressRecentConsultations = () => {
    navigation.navigate('Recent Consultations');
  };

  const onPressInsurance = () => {
    navigation.navigate('Insurance');

  };
    return(
        <View>
             <Text>{user.email}</Text>
             <Text>{user.patient_profile?.bio}</Text>
             <Text>{user.patient_profile?.age}</Text>
             <Text>{user?.patient_profile?.first_name}</Text>
             <Text>{user?.patient_profile?.last_name}</Text>

                   <View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressRecentConsultations}>
          <Text>Recent Consultations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onPressInsurance}>
          <Text>Insurance Cards</Text>
        </TouchableOpacity>
      </View>
        </View>

        

    )
}

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
  