import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const PatientProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> User Profile Profile</Text>
      <Image style={styles.image} source={require('./profile_pictures/patient1.jpeg')} />
      <Text style={styles.name}> Henry Joseph </Text>


    {/* Profile Information */}
      <View style={styles.profileInformation}>
      <Text>age</Text>
      <Text>blood</Text>
      <Text>gender</Text>
      <Text>height</Text>
      <Text>weight</Text>

      </View>


      {/* Buttons */}

      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Recent Consultations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
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
