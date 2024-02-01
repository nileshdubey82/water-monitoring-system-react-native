import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Loader from './Loader';
import Constants from 'expo-constants';


export default function Signup(props) {
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [mobile, setmobile] = React.useState('');
  const [state, setstate] = React.useState('');
  const [city, setcity] = React.useState('');
  const [pass, setpass] = React.useState('');
  const [esp, setesp] = React.useState('');
  const [zipcode, setzipcode] = React.useState('');
  const [loading,setloading]=React.useState()
  const InsertRecord = () => {

    var Email1 = `${email}`;
    var City1 = `${city}`;
    var Name1 = `${name}`;
    var Mobile1 = `${mobile}`;
    var State1 = `${state}`;
    var Zipcode1 = `${zipcode}`;
    var Password1 = `${pass}`;
    var ESP1 = `${esp}`;
    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );

    if (
      Email1.length == 0 ||
      City1.length == 0 ||
      Name1.length == 0 ||
      Mobile1.length == 0 ||
      State1.length == 0 ||
      Zipcode1.length == 0 ||
      ESP1.length == 0 ||
      Password1.length == 0
    ) {
      alert('Required Field Is Missing!!!');
    } else if (!checkEmail.test(Email1)) {
      alert('invalid email!!!');
    }
    // Password validations
    else if (Password1.length < 8) {
      alert('Minimum 08 characters required!!!');
    } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password1)) {
      alert(' Password  Use atleast 01 special character!!!');
    } else if (/[ ]/.test(Password1)) {
      alert("Don't include space in Password!!!");
    } else if (Mobile1.length == 9) {
      alert('mobile number must 10 digits');
    } else {
      //http://192.168.29.173/phpapidb/login.php
      //http://10.0.2.2:80/SignIn/SignIn.php
      var InsertAPIURL = 'https://h2osavernil.000webhostapp.com/user-insert.php'; //API to render insert

      var headers = {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      };

      var Data = {
        "Email": Email1,
        "Password": Password1,
        "Name": Name1,
        "Mobile": Mobile1,
        "State": State1,
        "City": City1,
        "ESP": ESP1
      };
      // FETCH func ------------ ------------------------
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data) //convert data to JSON
      })
        .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          if (response[0].Message == 'Complete') {
            // alert(response[0].Message);
            console.log(response[0].Message) // If data is in JSON => Display alert msg
            setloading(false)
            props.navigation.push("Admin");
          } //Navigate to next screen if authentications are valid
        })
        .catch((error) => {
          alert('Error Occured' + error);
          console.log(error);
        });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          <View style={{ bottom: 25, alignItems: 'center' }}>
            <Text
              style={{ fontSize: 30, color: '#878235', fontWeight: 'bold' }}>
              Create User Here !
            </Text>
          </View>

          <Text style={{ fontWeight: 'bold' ,color:'black' }}>Enter School Name {name}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School Name"
              placeholderTextColor="grey"
              style={styles.textInput}
              color='black'
              onChangeText={(e) => setname(e)}
            />
          </View>
          <Text style={{ fontWeight: 'bold',color:'black' }}>Enter School Mobile {mobile}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School Mobile"
              placeholderTextColor="grey"
              style={styles.textInput}
              onChangeText={(pass) => setmobile(pass)}
              keyboardType="Email"
              color='black'
            />
          </View>
          <Text style={{ fontWeight: 'bold',color:'black' }}>Enter School Email {email}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School Email"
              placeholderTextColor="grey"
              style={styles.textInput}
              onChangeText={(email) => setemail(email)}
              keyboardType="Email"
              color='black'
            />
          </View>
          <Text style={{ fontWeight: 'bold',color:'black' }}>Enter School Password {pass}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School Password"
              placeholderTextColor="grey"
              style={styles.textInput}
              onChangeText={(e) => setpass(e)}
              color='black'
            />
          </View>
          <Text style={{ fontWeight: 'bold' ,color:'black'}}>Enter ESP Id {esp}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter ESP ID"
              placeholderTextColor="grey"
              style={styles.textInput}
              color='black'
              onChangeText={(e) => {
                setesp(e);
              }}
            />
          </View>
          <Text style={{ fontWeight: 'bold' ,color:'black'}}>Enter School State {state}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School State"
              placeholderTextColor="grey"
              color='black'
              style={styles.textInput}
              onChangeText={(s) => {
                setstate(s);
              }}
            />
          </View>
          <Text style={{ fontWeight: 'bold',color:'black' }}>Enter School City {city}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School City"
              placeholderTextColor="grey"
              color='black'
              style={styles.textInput}
              onChangeText={(city) => {
                setcity(city);
              }}
            />
          </View>
          <Text style={{ fontWeight: 'bold',color:'black' }}>Enter School Zipcode {zipcode}</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter School ZipCode"
              placeholderTextColor="grey"
              style={styles.textInput}
              color='black'
              onChangeText={(ccity) => {
                setzipcode(ccity);
              }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={
                (styles.loginButtonSection,
                {
                  backgroundColor: '#06baab',
                  color: 'white',
                  height: 35,
                  justifyContent: 'center', //up dwn
                  alignItems: 'center', //r & l
                  width: '70%',
                  borderRadius: 10,
                })
              }
              onPress={()=>{
                InsertRecord()
                setloading(true)
              }}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  viewStyle: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 20,
    height: 40,
    fontSize: 15,
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    paddingBottom: 5,
    width: '100%',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textTransform: 'uppercase',
  },
  loginButtonSection: {
    width: '100%',
    // height: '30%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
