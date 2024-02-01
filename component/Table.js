import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import Loader from './Loader';
export default function ExampleThree (props,{routs}) {

	const [ph, setph] = React.useState([]);
	const [tds, settds] = React.useState([]);
	const [turb, setturb] = React.useState([]);
	const [temp, settemp] = React.useState([]);
	const [lavel, setlavel] = React.useState([]);
	const [water, setwater] = React.useState([]);
	const [esp, setesp] = React.useState([]);
	const [date, setdate] = React.useState([]);
	const [time, settime] = React.useState([]);
	const [lengthval, setlength] = React.useState([]);


	let [data, setData] = React.useState([]);
	React.useEffect(() => {
	  ShowDetail();
	//   PH();
  setLoading(true)

	}, []);

	function ShowDetail(A) {
	  var APIURL = 'https://h2osavernil.000webhostapp.com/svalue.php';
	//   var APIURL = "http://127.0.0.1/H2O/svalue.php";
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
		//   console.log(Response);

           const JSONString = Response;

       object = JSON.parse(JSON.stringify(JSONString))
	   settableData(object);

     setLoading(false)

    // alert(object)
		})

		.catch((error) => {
		  console.error('ERROR FOUND ' + error);
		});
	}
    data = {
      tableHead: [
        'ESPID',
        'PH',
        'TDS',
        'Temprature',
        'Turbidity',
        'Water Counsume',
        'Lavel',
        'Time',
        'Date',
      ],
      widthArr: [100, 100, 100, 100, 100, 100, 100, 100, 100],
    };


const [tableData1,settableData]=React.useState([])
const [loading, setLoading] = React.useState(false);

    const tableData = [];

    tableData1.map((item)=>{
      const rowData = [item.espid,item.ph,item.tds,item.temp,item.turb,item.water,item.lvl,item.time,item.date];
        rowData.push();
	  tableData.push(rowData);
    });

    // const index=[1,2,3,4,5,6,7,8,9]

    return (
      <View style={styles.container}>
      <Loader loading={loading}/>
        <ScrollView horizontal={true}>

          <View>

            <Table borderStyle={{ borderColor: '#C1C0B9' }}>

              <Row
                data={data.tableHead}
                widthArr={data.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>

              <Table borderStyle={{ borderColor: 'lightblue' }}>

                {tableData.map((rowData,index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={data.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: '#lightblue' },
                    ]}
                    textStyle={styles.text}
                  />

                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: 'bold',color:'black' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
