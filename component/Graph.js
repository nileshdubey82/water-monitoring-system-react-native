import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loader from './Loader';

import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile(props) {
  const [name, setname] = React.useState('');
  const [sstate, setstate] = useState('');
  const [mobile, setmobile] = useState('');
  const [city, setcity] = useState('');
  const [email, setemail] = useState('');
  const [esp, setespid] = useState('');
  const [loading,setloading]=React.useState()
  const [gettingloginid, setgettingloginid] = React.useState('');

  useEffect(() => {
    ShowDetail();
    setloading(true)
    try {
      AsyncStorage.getItem('Email').then((value) => {
        setgettingloginid(value);
        var A = `${value}`;
        ShowDetail(A);
        console.log(A);
        console.log('receive id');
        console.log(value);
      });
    } catch (e) {
      console.log(e);
    }
    var A = `${gettingloginid}`;
    console.log(A);
    console.log('success');
  }, []);
  function ShowDetail(A) {
    //         <Ionicons name='person-circle' size={60} color='black'
    // Loginid=`${gettingloginid}`
    // />
    // console.log("advbhjnadsk")
    // alert(Loginid)
    // alert(A)
    // console.log(Loginid)
    // console.log('fethc a here')
    // console.log(A)
    // var APIURL = "http://192.168.52.94/phpapidb/login.php";
    var APIURL = 'https://h2osavernil.000webhostapp.com/user-show.php';
    // var APIURL = "http://127.0.0.1/API_ALUMNI/show.php";

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    var Data = {
      Email: A,
    };
    fetch(APIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((Response) => Response.json())
      .then((Response) => {
        console.log('login data is succees');
        console.log(Response);
        setname(Response[0].user_name);
        setmobile(Response[0].user_mobile);
        setemail(Response[0].user_email);
        setstate(Response[0].user_state);
        setespid(Response[0].espid);
        setcity(Response[0].user_city)
        setloading(false)
      })
      .catch((error) => {
        console.error('ERROR FOUND' + error);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <Loader loading={loading}/>
      <View style={styles.userInfoSection}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ justifyContent: 'center'}}>

            <Text
              style={{
                  marginTop: 30,
                  marginBottom: 5,
                  color:'black',
                  fontWeight:'bold'
                }
              }>
              School Name= {name}
            </Text>
            <Text style={styles.title2}>Email ID= {email}</Text>
            <Text style={styles.title2}>Mobile Number= {mobile}</Text>
            <Text style={styles.title2}>Device Id= {esp}</Text>
            <Text style={styles.title2}>State= {sstate}</Text>
            <Text style={styles.title2}>City= {city}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate('TableData')}>
          <Text style={styles.text}>Show Details</Text>
          <Icon name="edit" color="#009387" size={25} />
        </TouchableOpacity>


        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.signout,
              {
                borderColor: '#009387',
                borderWidth: 2,
                marginTop: 35,
              },
            ]}
            onPress={() => props.navigation.push('Login')}>
            <Text
              style={[
                styles.textSignout,
                {
                  color: '#009387',
                },
              ]}>
              LogOut
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  userInfoSection: {
    // paddingHorizontal: 30,
    marginBottom: 25,
    flex: 3,
    backgroundColor: 'white',

  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    fontSize: 15,
    fontWeight:'bold',
    color: 'black',
  },

  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 26,
  },

  signout: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignout: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '',
  },
});
