import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import globalStyles from '../../styles/GlobalStyle'


const Landing = () => {
  return (
    <View style={globalStyles.container}>

    {/* Sign up Button */}
      <TouchableOpacity style={globalStyles.button} onPress={() => { console.log('pressed')}}>
            <Text> Sign Up </Text>
      </TouchableOpacity>

      <View>
          <Text>Already have an account?</Text>
      </View>

      <TouchableOpacity style={globalStyles.button} onPress={() => { console.log('pressed')}}>
            <Text> Sign In </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Landing;
