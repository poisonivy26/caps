// In App.js in a new project

import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TextInput,
  Safe,
} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';




// navigator imports
import AppointmentNavigator from './src/navigators/AppointmentStackNavigator';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import DashboardNavigator from './src/navigators/DashboardNavigator';
import FindDoctorNavigator from './src/navigators/FindDoctorStackNavigator';
import MessageNavigator from './src/navigators/MessageNavigator';
import PrescriptionNavigator from './src/navigators/PrescriptionNavigator';



// context imports
import {AuthContext} from './src/contexts/AuthContext';
import {useAuth} from './src/hooks/useAuth';


const RootStack = createStackNavigator();



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: null,
      loading: true,
      isLoggedIn: true,
      isLoading: true,
      
    }
  }


  render(){

 
  return (

  
    
    <NavigationContainer>
    <RootStack.Navigator>

      </RootStack.Navigator>
    </NavigationContainer>
  );
}
}


