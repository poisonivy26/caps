import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';

const DoctorInformation = ({navigation, route}) => {
  const { doctorId } = route.params
  const handleOnPressInformation = () => {
    alert('Doctor Personal Information')
  }

  const handleOnPressWorkingAddress = () => {
    alert('Doctor Personal Information')
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../doctor_images/doc1.jpg')}
      />
      <Text> Dr. Juan Dela Cruz </Text>
    <Text>{JSON.stringify(doctorId)}</Text>
      <TouchableOpacity style={styles.button} onPress={handleOnPressInformation}>
        <Text> Personal Information </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleOnPressWorkingAddress}>
        <Text> Working Address </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    paddingBottom: 5,
    marginBottom: 5,
  },
});

export default DoctorInformation;
