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
      navigation.navigate('Doctor List')
  }

  return (
    <View style={styles.container}>

    {/* Find a doctor text */}
    <Text style={styles.header}>
        Find a Doctor
    </Text>

    
    <Text style={styles.tinyHeader}>
        Specialization
    </Text>
      <Picker
        selectedValue={selectDoctor}
        style={styles.dropDown}
        onValueChange={handleValueChange}>
        <Picker.Item label="Doctor Specialization 1" value="Doc1" />
        <Picker.Item label="Doctor Specialization 2" value="Doc2" />
        <Picker.Item label="Doctor Specialization 3" value="Doc3" />
        <Picker.Item label="Doctor Specialization 4" value="Doc4" />
        <Picker.Item label="Doctor Specialization 5" value="Doc5" />
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
})

export default FindDoctor;
