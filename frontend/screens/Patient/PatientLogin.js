import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import globalStyles from '../../styles/GlobalStyle';

const PatientLogin = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('Email');
  const [password, onChangePassword] = React.useState('Password');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Sign In</Text>
      </View>

      <View style={styles.email}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          placeholder="Email"
        />
      </View>

      <View style={styles.password}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      {/* sign in button */}

      <View style={styles.signIn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Dashboard Screen')
            console.log('pressed');
          }}>
          <Text style={styles.buttonText}> Sign In </Text>
        </TouchableOpacity>
      </View>

      {/* Links */}

        <Text>
 
          Dont have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('PatientRegistrationScreen')}>
            <Text style={styles.links}>| Create Account</Text>
          </TouchableOpacity>
        </Text>

        <Text>

          Are you a Doctor?
          <TouchableOpacity>
            <Text style={styles.links}>| Click Here</Text>
          </TouchableOpacity>
        </Text>

    </View>
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

export default PatientLogin;
