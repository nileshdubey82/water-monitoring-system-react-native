import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput,Button,FlatList } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
function MessageReceive({navigation}) {

  const [user, setUser] = useState();
  const [id,setid]=useState();

 useEffect(() => {
   ViewMessage();
  });


  function ViewMessage(){
    var Email;

    // var APIURL = "http://192.168.52.94/phpapidb/login.php";
    var APIURL = "https://h2osavernil.000webhostapp.com/message-rec.php";
    // v ar APIURL =  "http://127.0.0.1/API_ALUMNI/show.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
    var Data ={
      "Email":"prachi@gmail.com"
    };

    fetch(APIURL,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
    .then((Response)=>Response.json())
    .then((Response)=>{
      setUser(Response);
      console.log(Response);
      })
    .catch((error)=>{
      console.error("ERROR FOUND" + error);
    })
  }
    function Delete(item){
    var Email;

    // var APIURL = "http://192.168.52.94/phpapidb/login.php";
    var APIURL = "http://127.0.0.1/API_ALUMNI/message-delete.php";
    // var APIURL = "http://127.0.0.1/API_ALUMNI/show.php";
      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
    var Data ={
      "id":item.msg_id
    };

    fetch(APIURL,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
    .then((Response)=>Response.json())
    .then((Response)=>{
      setUser(Response);
      console.log(Response);
      })
    .catch((error)=>{
      console.error("ERROR FOUND" + error);
    })
  }
//  onPress={() => getItem(item)}>
  const renderItem = ({ item }) => {
    return (
      <View onPress={()=>navigation.navigate('BlankPage', {
        item: item
      })} style={{flexDirection:"row",flex:1}}>
        <View style={styles.txt}>
        <TouchableOpacity style={{left:20}} onPress={() => getItem(item)}>
          <Text > Sender Name: {item.from_name}</Text>
          <Text>Subject Name :{item.subject}</Text>
           <Text>Message :{item.message}</Text>
          </TouchableOpacity>
           <TouchableOpacity  onPress={() => { Delete(item) ,ViewMessage() }}> <Text style={styles.approve_btn}>Delete</Text></TouchableOpacity>
        </View>
      </View>
    );
  };
   const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.msg_id);

  };

  return (

        <View >
             <FlatList
               data={user}
               renderItem={renderItem}
            keyExtractor={(item) => setid(item.Id)}
             />
              {/* <Button title="shivam" onPress={InsertRecord}/> */}
              <Text>{id}</Text>
        </View>



);
}

export default MessageReceive;
const styles = StyleSheet.create({
  txt:{
     backgroundColor:"lightblue",
     marginTop:9,
     height:80,
     width:250,
    //  justifyContent:"center",
    //  flexDirection:'row'
    border:1
  },
  approve_btn:{
    backgroundColor:"green",
    width:100,
    fontSize:14,
    marginTop:3,
    textAlign:"center",
  },



});
