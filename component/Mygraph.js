import { View, Text ,Dimensions} from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-line-chart'
export default function Mygraph() {
	const [val, setval] = React.useState({
		datasets: [
		  {
			data: [],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
			strokeWidth: 2,
		  },
		],
		legend: ['Moisture Values'],
	  });
	   const [temp, settemp] = React.useState({
		datasets: [
		  {
			data: [],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
			strokeWidth: 2,
		  },
		],
		legend: ['Moisture Values'],
	  });
	  React.useEffect(() => {
		ViewMessage();
	  }, []);
	  const [myval,setmyval]=React.useState("temp")
	  function ViewMessage() {
		var Email;
		

		// var APIURL = "http://192.168.52.94/phpapidb/login.php";
		// var APIURL = 'http://127.0.0.1/H2O/svalue.php';

		var APIURL="https://h2osavernil.000webhostapp.com/svalue.php";

		// v ar APIURL =  "http://127.0.0.1/API_ALUMNI/show.php";

		var headers = {
		  Accept: 'application/json',
		  'Content-Type': 'application/json',
		};
		var Data = {
		  ESP: 'nilesh@gmail.com'
		};

		fetch(APIURL, {
		  method: 'POST',
		  headers: headers,
		  body: JSON.stringify(Data),
		})
		  .then((Response) => Response.json())
		  .then((Response) => {
			const JSONString = Response;
console.log(JSONString)
			object = JSON.parse(JSON.stringify(JSONString));
			var result = [];
			var temp1=[];
			// var res=result
			var days=[];
			var Myval=`${myval}`
			for (var i in object) {
			  result.push(object[i].ph);
			  days.push(object[i].time);
			  temp1.push(object[i].tds)
			}

			var PH = result.map(Number);
			var Temp = temp1.map(Number);
			console.log(PH+"ph");
			console.log(days)
			console.log(Temp+"temdata")
			//  setval(Re)

			setval({
			//   labels: days,
			  datasets: [
				{
				  data: PH,
				},
			  ],
			});
			settemp({
			//   labels: days,
			  datasets: [
				{
				  data: Temp,
				},
			  ],
			});
		  })
		  .catch((error) => {
			console.error('ERROR FOUND hh  ' + error);
		  });
	  }

  return (

<View>
  <Text>
    Bezier Line Chart
  </Text>
  <LineChart
    data={{

      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: 'lightblue',
      backgroundGradientFrom: 'lightblue',
      backgroundGradientTo: 'white',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(5, 5, 5, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}
