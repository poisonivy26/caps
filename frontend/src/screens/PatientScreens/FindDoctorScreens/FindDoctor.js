import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import {useGetDoctor} from '../../../hooks/useGetDoctor';

const FindDoctor = ({navigation}) => {
  const [selectDoctor, setSelectedDoctor] = useState('Allergists');

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedDoctor(itemValue);
    console.log(itemValue);
  };

  const handleOnPress = (itemValue) => {
    navigation.navigate('Doctor List', {
      specialization: selectDoctor,
    });
  };

  return (
    <View style={styles.container}>
      {/* Find a doctor text */}
      <Text style={styles.header}>Find a Doctor</Text>

      <Text style={styles.tinyHeader}>Specialization</Text>
      <Picker
        selectedValue={selectDoctor}
        style={styles.dropDown}
        onValueChange={handleValueChange}>
        <Picker.Item label="ALLERGISTS" value="Allergists" />
        <Picker.Item label="ANESTHESIOLOGISTS" value="Anesthesiologists" />
        <Picker.Item label="CARDIOLOGISTS" value="Cardiologists" />
        <Picker.Item label="COLON SURGEONS" value="Colon Surgeons" />
        <Picker.Item
          label="CRITICAL CARE MEDICINE SPECIALISTS"
          value="Critical Care Medicine Specialist"
        />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 50,
    color: '#19769f',
  },

  tinyHeader: {
    fontSize: 35,
    color: '#19769f',
  },
  dropDown: {
    height: 50,
    width: 250,
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

export default FindDoctor;
