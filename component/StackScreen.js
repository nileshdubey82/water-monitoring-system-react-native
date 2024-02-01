/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Val from './val';
import Login from './Login';
import SplashScreen from './SplashScreen';
import Bottom from '../Bottom/Bottom';
import Admin from './Admin';
import CreateUser from './CreateUser';
import SearchUser from './SearchUser';
import UserDetails from './UserDetail';
import TableData from './Table';
import SeenMessage from './MessageSeen';
import ReceiveMessage from './MessageReceive';
import Table2 from './Table2';

import NoticePost from '../component/NoticePost';
import MessageReceive from './MessageReceive';
import First from './FirstScreen';
import ParentLogin from './ParentLogin';
import ParentScreen from './ParentScreen';
const Stack = createNativeStackNavigator();

function StackScreen() {
  const [splash, setsplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: 'white',
        }}>
        {splash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={() => ({
              headerShown: false,
              // eslint-disable-next-line space-infix-ops
            })}
          />
        ) : null}
        <Stack.Screen
          name="First"
          component={First}
          options={({navigation}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={({navigation}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={({navigation}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="SearchUser" component={SearchUser} />
        <Stack.Screen
          name="UserDetail"
          component={UserDetails}
          options={({navigation}) => ({
            headerShown: true,
          })}
        />
        <Stack.Screen name="TableData" component={TableData} />
        <Stack.Screen name="Advice" component={NoticePost} />
        <Stack.Screen name="SeenMessage" component={SeenMessage} />
        <Stack.Screen name="MessageReceive" component={MessageReceive} />
        <Stack.Screen
          name="ParentLogin"
          component={ParentLogin}
          options={({navigation}) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="ParentScreen" component={ParentScreen} />
        <Stack.Screen name="Table2" component={Table2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
