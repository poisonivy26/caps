import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

import {AuthContext} from '../contexts/AuthContext';
import {Picker} from '@react-native-picker/picker';

const DoctorRegistration = ({navigation}) => {
  const {doctor_register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('doctor1@gmail.com');
  const [password, setPassword] = React.useState('1234');
  const [loading, setLoading] = React.useState(false);

  const [firstName, setFirstName] = React.useState('First Name');
  const [middleName, setMiddleName] = React.useState('Middle Name');
  const [lastName, setLastName] = React.useState('Last Name');
  const [bio, setBio] = React.useState('Bio');
  const [age, setAge] = React.useState('9');
  const [specialization, setSpecialization] = React.useState('');
  const [education, setEducation] = React.useState('UP MED');


  const handleValueChange = (itemValue, itemIndex) => {
    setSpecialization(itemValue);
    console.log(itemValue);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.text}>Sign Up</Text>

            <TextInput
              style={styles.input}
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              style={styles.input}
              placeholder={'Bio'}
              value={bio}
              onChangeText={setBio}
            />

            <TextInput
              style={styles.input}
              placeholder={'Age'}
              value={age}
              onChangeText={setAge}
            />

            <TextInput
              style={styles.input}
              placeholder={'First Name'}
              value={firstName}
              onChangeText={setFirstName}
            />

            <TextInput
              style={styles.input}
              placeholder={'Last name'}
              value={lastName}
              onChangeText={setLastName}
            />


            <TextInput
              style={styles.input}
              placeholder={'Education'}
              value={education}
              onChangeText={setEducation}
            />

<Picker
        selectedValue={specialization}
        style={styles.dropDown}
        onValueChange={handleValueChange}>
        <Picker.Item label="ALLERGISTS" value="Allergists" />
        <Picker.Item label="ANESTHESIOLOGISTS" value="Anesthesiologists" />
        <Picker.Item label="CARDIOLOGISTS" value="Cardiologists" />
        <Picker.Item label="COLON SURGEONS" value="Colon Surgeons" />
        <Picker.Item label="CRITICAL CARE MEDICINE SPECIALISTS" value="Critical Care Medicine Specialist" />
      </Picker>

            {/* sign in button */}

            <View style={styles.signIn}>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  try {
                    setLoading(true);
                    await doctor_register(
                      email,
                      password,
                      bio,
                      age,
                      firstName,
                      lastName,
                      education,
                      specialization,
                     
                    );
                    navigation.pop();
                  } catch (e) {
                    setError(e.message);
                    setLoading(false);
                  }
                }}>
                <Text style={styles.buttonText}> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    color: '#19769f',
    fontSize: 35,
  },
  email: {},
  button: {
    alignItems: 'center',
    backgroundColor: '#19769f',
    padding: 15,
  },
  buttonText: {
    color: 'white',
  },
  signIn: {},
  links: {
    color: '#19769f',
  },
});

export default DoctorRegistration;
