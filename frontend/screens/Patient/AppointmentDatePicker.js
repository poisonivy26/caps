import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentDatePicker = ( {navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  const handleOnPress = () => {
      navigation.navigate('Appointment Summary')
  }

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Pick a Date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Pick a time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Text>Available Time Slots this date </Text>

      <Text>Todo here </Text>

      <TouchableOpacity
          style={styles.button}
          onPress={handleOnPress}>
          <Text style={styles.buttonText}>Next</Text>
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

export default AppointmentDatePicker;
