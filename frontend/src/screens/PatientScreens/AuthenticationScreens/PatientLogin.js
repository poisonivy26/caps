import React, {Component} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import globalStyles from '../../../../styles/GlobalStyle';
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

class PatientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};



    this.loginUser = this.loginUser.bind(this);
  }

  login = () => {
    alert(this.state.email + ' ' + this.state.password);
  };

  loginUser ()  {

    const { email, password } = this.state;

    axios.post('http://192.168.1.2:8000/api/auth/login/', {
      email: email,
      password: password,
    }, {
      'headers': {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      let access_token = response.data.access
      let refresh_token = response.data.refresh
      console.log(access_token)
      RNSecureKeyStore.set("access_token", access_token, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
    .then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });
    
      
      
    })
    .catch((error) => console.log( error ) );;
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Sign In</Text>
        </View>

        <View style={styles.email}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={(text) => this.setState({email: text})}
            placeholder="Email"
          />
        </View>

        <View style={styles.password}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={(text) => this.setState({password: text})}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        {/* sign in button */}

        <View style={styles.signIn}>
          <TouchableOpacity style={styles.button} onPress={this.loginUser}>
            <Text style={styles.buttonText}> Sign In </Text>
          </TouchableOpacity>
        </View>

        {/* Links */}

        <Text>
          Dont have an account?
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Sign up')}>
            <Text style={styles.links}>| Create Account</Text>
          </TouchableOpacity>
        </Text>

        <Text>
          Are you a Doctor?
          <TouchableOpacity
            onPress={() => {
              alert('Doctor Navigation To do');
            }}>
            <Text style={styles.links}>| Click Here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  }
}

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
