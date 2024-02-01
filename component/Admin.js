import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function Admin({ navigation }) {
  return (
    <View style={styles.container}>
    <StatusBar  hidden={true}  barStyle="white" translucent={true} />
      <View style={styles.header}>

        <Text style={styles.admin}>Hello Admin</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.event}
          onPress={() => navigation.navigate('CreateUser')}>
          <Text style={styles.txt1}>
            Create User!{' '}
            <Feather
              style={styles.icon}
              name="arrow-right"
              size={23}
              color="black"
            />{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.event}
          onPress={() => navigation.navigate('SearchUser')}>
          <Text style={styles.txt1}>
            Show All Details{' '}
            <Feather
              style={styles.icon}
              name="arrow-right"
              size={23}
              color="black"
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.event}
          onPress={() => navigation.push('Login')}>
          <Text style={styles.txt1}>
            Log-Out{' '}
            <Feather
              style={styles.icon}
              name="log-out"
              size={23}
              color="black"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Admin;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightgray',
    marginTop: 24,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  main: {
    // flex: 1,
    // backgroundColor: 'lightgray',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    top:20,
    backgroundColor: 'lightblue',
    height: 110,
    fontSize: 48,
    fontWeight: 'bold',
    borderRadius: 35,

  },
  admin: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 35,
    top: 26,
  },
  event: {
    backgroundColor: 'orange',
    // shadowOpacity:10,
    height: 100,
    width: 200,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  txt1: {
    fontSize: 18,
    // textShadowColor:"gray",
  },
});
