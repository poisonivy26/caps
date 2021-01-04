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
import globalStyles from '../../styles/GlobalStyle';

const PatientRegister = ({navigation}) => {
  const [firstName, onChangeFirstName] = React.useState('First Name');
  const [middleName, onChangeMiddleName] = React.useState('Middle Name');
  const [lastName, onChangeLastName] = React.useState('Last Name');
  const [mobileNumber, onChangeMobileNumber] = React.useState('Mobile Number');
  const [email, onChangeEmail] = React.useState('Email');
  const [password, onChangePassword] = React.useState('Password');
  return (

    <ScrollView>
    <View style={styles.container}>  

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Text style={styles.text}>Sign Up</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeFirstName(text)}
          placeholder="First Name e.g Juan"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeMiddleName(text)}
          placeholder="Middle Name e.g De la"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeLastName(text)}
          placeholder="Last Name e.g Cruz"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeMobileNumber(text)}
          placeholder="Mobile Number e.g 999999"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />

        {/* sign in button */}

        <View style={styles.signIn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('pressed');
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
},
  input: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
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

export default PatientRegister;
