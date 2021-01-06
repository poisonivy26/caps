import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const Dashboard = ( { navigation }) => {
  function handlePress() {
    console.log('Pressed');
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <TouchableOpacity onPress={() => {
            console.log('Pressed Find Doctor');
            navigation.navigate('Find Doctor');
        }}>
          <Image style={styles.image} source={require('../icons/doctor.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxTwo}>

        <TouchableOpacity onPress={() => {
            console.log('Pressed Appointments');
            navigation.navigate('Create Appointment');
        }}>
        <Image style={styles.image} source={require('../icons/appointments.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxThree}>
        <TouchableOpacity onPress={() => {
            console.log('Pressed Prescriptons');
            navigation.navigate('Prescriptions');
        }}>
        <Image style={styles.image} source={require('../icons/prescription.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxFour}>
        <TouchableOpacity onPress={() => {
            console.log('Pressed messages');
            navigation.navigate('Messaging');
        }}>
        <Image style={styles.image} source={require('../icons/messages.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    overflow: "hidden",
    borderWidth: 3,

  },
  boxOne: {
    padding: 10,
    borderColor: '#42f5bc',
    borderRadius: 20,
    borderWidth: 1.5,
    width: 100,
    height: 100,
  },

  boxTwo: {
    padding: 10,
    borderColor: '#42f5bc',
    borderRadius: 20,
    borderWidth: 1.5,
    width: 100,
    height: 100,
  },

  boxThree: {
    padding: 10,
    borderColor: '#42f5bc',
    width: 100,
    borderRadius: 20,
    borderWidth: 1.5,
    height: 100,
  },

  boxFour: {
    padding: 10,
    borderColor: '#42f5bc',
    width: 100,
    borderRadius: 20,
    borderWidth: 1.5,
    height: 100,
  },

  text: {
      fontSize: 10,
      color: 'white',

  },
});

export default Dashboard;
