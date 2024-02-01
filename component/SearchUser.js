// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
import Loader from './Loader';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// import Navigation from '../components/RootStack/';

function Search  (props) {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState('');
  const [masterDataSource, setMasterDataSource] = useState('');
    const [loading,setloading]=React.useState()
  useEffect(() => {
    setloading(true)
    fetch('https://h2osavernil.000webhostapp.com/user-show.php')
      .then((response) => response.json())
      .then((response) => {
        setFilteredDataSource(response);
        setMasterDataSource(response);
        setloading(false)
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const response = masterDataSource.filter(
        function (item) {
          const itemData = item.espid
            ? item.user_name.toUpperCase()
            : ''
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(response);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <TouchableOpacity style={styles.itemStyle} onPress={()=>{props.navigation.navigate("UserDetail", {
        item: item
      })}}>
      <Text style={{color:'black'}}>
        School Name= {item.user_name.toUpperCase()}{'\n'}{'\n'}
        School Email = {item.user_email.toUpperCase()}{"\n"}{'\n'}
          School Device Id= {item.espid.toUpperCase()}
      </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height:1,
          marginTop:3,
          width: '100%',
          // backgroundColor: 'black',

        }}
      />
    );
  };


  return (
        // <ScrollView style={{flex: 1,padding:10}}>

      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          placeholderTextColor='grey'
          color='black'
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>

        // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    backgroundColor:"lightblue",
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default Search;
