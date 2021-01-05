import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


const FindDoctor = ( {navigation}) => {
  const [selectDoctor, setSelectedDoctor] = useState('');

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedDoctor(itemValue);
    console.log(itemValue);
  };

  const handleOnPress = () => {
      navigation.navigate('Appointment Date Picker')
  }

  return (
    <View style={styles.container}>

    {/* Find a doctor text */}
    <Text style={styles.header}>
        Create an Appointment
    </Text>

    
    <Text style={styles.tinyHeader}>
        Doctor
    </Text>
      <Picker
        selectedValue={selectDoctor}
        style={styles.dropDown}
        onValueChange={handleValueChange}>
        <Picker.Item label="Doctor Juan 1" value="Doc1" />
        <Picker.Item label="Doctor Juan 2" value="Doc2" />
      </Picker>

      <Text style={styles.tinyHeader}>
        Problem
    </Text>
      <Picker
        selectedValue={selectDoctor}
        style={styles.dropDown}
        onValueChange={handleValueChange}>
        <Picker.Item label="Covid Related Symptoms" value="covid" />
        <Picker.Item label="Mild Soreness" value="soreness" />
      </Picker>

        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>Next</Text> 
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
})

export default FindDoctor;
