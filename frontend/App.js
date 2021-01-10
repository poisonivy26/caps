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


