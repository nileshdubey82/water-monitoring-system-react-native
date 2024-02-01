import React, {Component, useEffect} from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader';
export default function SignIn(props) {
  useEffect(() => {
    InsertRecord();
  }, []);

  const InsertRecord = () => {
    var Email1 = `${email}`;
    var Password1 = `${pass}`;

    if (Email1.length == 0 || Password1.length == 0) {
      // alert("Required Field Is Missing!!!");

    } else {
      var APIURL = 'https://h2osavernil.000webhostapp.com/Parentlogin.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
      var Data = {
        Email: Email1,
        Password: Password1
      };

      fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then(response => response.json())
        .then(response => {
         if (response[0].Message == 'parent') {


            props.navigation.navigate('ParentScreen');
            setloading(false)
          } else {
            alert('wait for confirmation');
			setloading(false)
          }
          console.log(Data);
        })
        .catch(error => {
          alert(error);
          setloading(false);
          console.error('ERROR FOUND' + error);
        });
    }
  };
  const [email, setEmail] = React.useState('');
  const [pass, setpass] = React.useState('');
  const [loading,setloading]=React.useState(false)

  return (
    <View style={styles.container}>
    <Loader loading={loading}/>
      <StatusBar hidden={false} barStyle="light-content" translucent={true} />
      <View style={styles.header}>
        <Animatable.Image
          animation="pulse"
          easing="ease-in"
          iterationCount="infinite"
          style={{width: 200, height: 200,top:40}}
          source={require('../image/giphy.gif')}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Enter School Code</Text>
        <View style={styles.action}>
         <View style={{justifyContent:'center'}}><Icons name="person" color="#05375a" size={20} /></View>
          <TextInput
            placeholder="Your School Code"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={e => setEmail(e)}
            value={email}
            placeholderTextColor="grey"
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Enter School Password
		</Text>
        <View style={styles.action}>
          <View style={{justifyContent:'center'}}><FontAwesome name="lock" color="#05375a" size={20} /></View>
          <TextInput
            placeholder="Enter School Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={p => setpass(p)}
            placeholderTextColor="grey"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            InsertRecord();
            setloading(true);
          }}
          style={[
            styles.signIn,
            {
              borderColor: 'black',
              borderWidth: 3,
              marginTop: 15,
            },
          ]}>
          <Animatable.Text
            animation="pulse"
            easing="ease-in"
            iterationCount="infinite"
            style={[styles.textSign, {color: 'black'}]}>
            Login
          </Animatable.Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  header: {
    flex: 2,
    // backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 100,
  },
  footer: {
    flex: 4,
    backgroundColor: 'water',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius:20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    // alignItems:'center'
  },

  text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.a === '' ? 0 : 1,
    paddingLeft: 10,
    color: '#05375a',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    justifyContent:'center',
    alignContent:'center'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
