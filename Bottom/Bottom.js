import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../component/val'

import Graph from '../component/Graph';
import NotivePost from '../component/NoticePost'
import Mygraph from '../component/Mygraph'

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
		tabBarIcon: () =><Ionicons name='home' size={25} color='black' />
	}}/>
   <Tab.Screen name="Advice" component={NotivePost} options={{
		tabBarIcon: () =><Ionicons name='chatbox' size={25} color='black' />
	}}/>
        <Tab.Screen name="ProfileScreen" component={Graph} options={{
		tabBarIcon: () =><Ionicons name='person' size={25} color='black' />
	}}/>

      </Tab.Navigator>

  );
}
