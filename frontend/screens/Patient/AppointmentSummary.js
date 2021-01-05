import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  Platform,
  Text,
} from 'react-native';

const AppointmentSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doctor In charge: Dr Juan 1</Text>
      <Text style={styles.text}>Time: 8-9AM</Text>
      <Text style={styles.text}>Date: Feb 21, 2021</Text>
      <Text style={styles.text}>Services</Text>
      <Text style={styles.text}>Weekly Checkup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 35,
    color: '#19769f',
  },
  text: {
      color: 'black',
      fontSize: 25,
  }
});

export default AppointmentSummary;
