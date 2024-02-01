import React, { Component ,useEffect} from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button,Platform ,StyleSheet,StatusBar,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignIn(props) {
  return (
       <View style={styles.container}>

             <StatusBar backgroundColor='white'/>
        <View style={styles.header}>
            <Animatable.Text
            animation='pulse' easing='ease-out' iterationCount="infinite"
            style={{fontSize:27,fontWeight:"bold",color:'white',fontFamily:'sans-serif'}}>WELCOME USER</Animatable.Text>

              <TouchableOpacity onPress={() => {
              props.navigation.navigate("Login");
            }} style={[styles.signIn, {
                        borderColor: 'black',
                        borderWidth: 3,
                        marginTop: 15,
                    }]}>
                   <Animatable.Text
            animation='pulse' easing='ease-in' iterationCount="infinite" style={[styles.textSign, {color:'grey' }]}>Login</Animatable.Text>
              </TouchableOpacity>

			  <TouchableOpacity onPress={() => {
              props.navigation.navigate("ParentLogin");
            }} style={[styles.signIn, {
                        borderColor: 'black',
                        borderWidth: 3,
                        marginTop: 15,
                    }]}>
                   <Animatable.Text
            animation='pulse' easing='ease-in' iterationCount="infinite" style={[styles.textSign, {color:'grey' }]}>Guest Login</Animatable.Text>
              </TouchableOpacity>
      </View>
      <View style={{flex:1}}></View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightblue',
      paddingHorizontal:25
  },
  header:{
      flex: 2,
      // backgroundColor: '#009387',
      justifyContent: 'center',
      alignItems:'center',
      borderBottomLeftRadius: 20,
        borderBottomRightRadius: 100,
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }


});

