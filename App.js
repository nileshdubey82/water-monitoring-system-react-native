// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackScreen from './component/StackScreen';


function App() {
  return (
    <StackScreen/>
  );
}  

export default App;
