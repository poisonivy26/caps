import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';

const DoctorInformation = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../doctor_images/doc1.jpg')}
      />
      <Text> Dr. Juan Dela Cruz </Text>

      <TouchableOpacity>
        <Text> Personal Information </Text>
      </TouchableOpacity>
      <TouchableOpacity>
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
});

export default DoctorInformation;
