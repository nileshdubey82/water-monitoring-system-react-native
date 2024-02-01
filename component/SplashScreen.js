import React from 'react';
import { View, Text,StyleSheet ,Image, StatusBar} from 'react-native'

export default function SplashScreen() {
  return (
	<View style={styles.container}>
	<StatusBar hidden={false} backgroundColor="black" color="black"   animated={true}/>
	<Image source={require('../image/newlogo.png')} style={{ width: 350, height: 350 }} />
	
	</View>
  )
}

const styles = StyleSheet.create({
	container:{
		flex:1 ,
		backgroundColor:'#ffffff',
		justifyContent:'center',
		alignItems:'center'
	}
})
