/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Modal,
  Pressable,
  Dimensions,
  Button,
  RefreshControl
} from 'react-native';
// import Nil from './components/nil';
// import Dub from './components/dub';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Loader from './Loader';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

export default function Val(props) {
  const [gettingloginid, setgettingloginid] = React.useState('');
  const [ph, setph] = React.useState('');
  const [tds, settds] = React.useState('');
  const [turb, setturb] = React.useState('');
  const [temp, settemp] = React.useState('');
  const [lavel, setlavel] = React.useState('');
  const [water, setwater] = React.useState('');

  const [loading,setloading]=React.useState()
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    ShowDetail();
    setloading(true)
    PH();
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
    Loginid = `${gettingloginid}`
    // />
    // console.log("advbhjnadsk")
    // alert(Loginid)
    // alert(A)
    // console.log(Loginid)
    // console.log('fethc a here')
    // console.log(A)
    // var APIURL = "http://192.168.52.94/phpapidb/login.php";
    var APIURL = 'https://h2osavernil.000webhostapp.com/udata.php';
    // var APIURL = "http://127.0.0.1/API_ALUMNI/show.php";

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    var Data = {
      "ESP": "esp01"
    };
    fetch(APIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
      .then((Response) => Response.json())
      .then((Response) => {
        console.log('login data is succees');
        console.log(Response);
        setph(Response[0].ph);
        settds(Response[0].tds);
        settemp(Response[0].temp);
        setlavel(Response[0].lvl);
        setwater(Response[0].water);
        setturb(Response[0].turb);
        setloading(false)
        if(Response[0].lvl < 30 || Response[0].water== 0 || Response[0].temp == -127 ){
          var AlertBar= setTimeout(() => {
    //   alert("Please Check Your Device")
    }, 5000)
        }else{
               clearTimeout(AlertBar)
        }
      })
      .catch((error) => {
        console.error('ERROR FOUND ' + error);
      });
  }

  var Sun = 100
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);

  const [refresh, setrefresh] = React.useState(false);
  const Pull = () => {
    setrefresh(true)
    ShowDetail();
    setTimeout(() => {
      setrefresh(false)
    }, 1000)
  }
  const AlertBar = () => {

    setTimeout(() => {
      alert("Please Check Your Device")
    }, 10000)
  }
  function PH() {

    var Email;

    // var APIURL = "http://192.168.52.94/phpapidb/login.php";
    var APIURL = 'https://h2osavernil.000webhostapp.com/svalue.php';
    // v ar APIURL =  "http://127.0.0.1/API_ALUMNI/show.php";

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    var Data = {
      ESP: 'nilesh@gmail.com',
    };

    fetch(APIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((Response) => Response.json())
      .then((Response) => {


        setData(Response[0].ph)
        console.log(Response[0].ph + "  PH")
        // alert({data})
        var z = 0;
        var x = Object.keys(Response).length;

  })
      .catch((error) => {
        console.error('ERROR FOUND hh  ' + error);
      });
  }


  var X = `${data}`
  var Y = `${data}`
  const data1 = [
    { x: 0, y: 7 },
    { x: Y, y: 0 }
  ]
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={false} onRefresh={Pull} />
    } style={{backgroundColor:'white'}}>
    <Loader loading={loading}/>
      <View style={{ flex: 1 ,backgroundColor:'white'}}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 250, justifyContent: 'center', alignItems: 'center' }}>
          <Animatable.Text
            animation="pulse"
            easing="ease-in"
            iterationCount="infinite"
            style={{ color:'black',fontWeight:'bold',fontSize:19 }}

          >WELCOME PARENTS</Animatable.Text>
        </View>

        <View style={{ backgroundColor: 'green', flex: 1 }}>


          <View style={{ justifyContent: 'center', backgroundColor: 'black' }}>
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <StatusBar
                animated={false}
                backgroundColor="lightblue"
                barStyle="light-content"
                translucent={true}
                hidden={false} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
        console.log('close modal');
      }}
              >
                <View style={styles.centeredView}>
                  <Chart
                    style={{ height: 300, width: '100%', backgroundColor: 'lightblue' }}
                    yDomain={{ min: 0, max: 14 }}
                    xDomain={{ min: 0, max: 14 }}
                    padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
                  >
                    <VerticalAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]} />
                    <HorizontalAxis tickCount={14} tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]} />
                    <Line data={data1} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
                  </Chart>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>

              </Modal>



              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible1(!modalVisible1);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text>Temp Model</Text>
                    <LineChart data={{
                      labels: ['Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                      ],
                      datasets: [
                        {
                          data: [Sun, 10, 100, 0, 0, 0, 0],
                          strokeWidth: 4,
                        },
                      ],
                    }}
                      width={300}
                      height={220}
                      chartConfig={{
                        backgroundColor: '#c92ac7',
                        backgroundGradientFrom: '#7bede2',
                        backgroundGradientTo: '#dbb8cd',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                      }}
                      style={{
                        marginVertical: 8,
                        borderRadius: 16,
                      }}
                    />

                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible1(!modalVisible1)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              {/* <View style={{backgroundColor:'black',flex:1}}></View> */}
              <View style={{ alignItems: 'center', right: 10, height: 400 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../image/ph.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black',fontWeight:'bold' }}>PH= {ph}</Text>
                </TouchableOpacity>

                {/* Next? */}

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    top: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible1(true)}>
                  <Image
                    source={require('../image/temp.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black' ,fontWeight:'bold'}}>Temprature= {temp}Deg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    top: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../image/turb.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black',fontWeight:'bold' }}>Turbidity= {turb}</Text>
                </TouchableOpacity>
              </View>
              {/* next */}
              <View style={{ alignItems: 'center', left: 10, flex: 1, height: 400 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../image/lavel.jpg')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black' ,fontWeight:'bold'}}>Lavel={lavel}%</Text>
                </TouchableOpacity>

                {/* Next */}
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    top: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../image/tds.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black' ,fontWeight:'bold'}}>TDS={tds}</Text>
                </TouchableOpacity>
                {/* NExt */}

                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    width: 150,
                    height: 80,
                    borderRadius: 10,
                    top: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }} onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../image/waterconsume.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={{ color: 'black' ,fontWeight:'bold'}}>Consume Water= {water}</Text>
                </TouchableOpacity>
              </View>

            </View>
			<View style={{backgroundColor:'white',padding:10}}>

			<TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate('TableData')}>
          <Text style={styles.text}>Show Details</Text>

        </TouchableOpacity>

		<TouchableOpacity
          style={styles.row1}
          onPress={() => props.navigation.navigate('Parentlogin')}>
          <Text style={styles.text}>LogOut</Text>

        </TouchableOpacity>
			</View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: 'white',
	borderWidth:2,
	borderColor:'black',
	borderRadius:20,
	bottm:10
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: 'white',
	top:10
  },
  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 26,
  },
});
