import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Messages imports
import Message from '../screens/PatientScreens/MessageScreens/Messages';

const MessageStack = createStackNavigator();
export function MessageNavigator() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Messaging" component={Message} />
    </MessageStack.Navigator>
  );
}
