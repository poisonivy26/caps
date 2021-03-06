import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';


import {AuthContext} from '../../../contexts/AuthContext';
import {useGet} from '../../../hooks/useGet';

const PrescriptionDetails = ({route, navigation}) => {

  
  const { itemId, otherParam } = route.params;
  const prescriptions = useGet('get_prescription/')
  
    const handleOnPress = () => {
        alert('Downloaded prescription')
    }
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require('../../doctor_images/doc1.jpg')}
      />
      <Text> Prescription 1 </Text> */}
      <Text style={styles.header}>Prescription: {JSON.stringify(itemId)}</Text>


      <TouchableOpacity
          style={styles.button}
          onPress={handleOnPress}>
          <Text style={styles.buttonText}>Download PDF</Text>
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
  header:{
    color: '#19769f',
    fontSize: 50,
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

export default PrescriptionDetails;
