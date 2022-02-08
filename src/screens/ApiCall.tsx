import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import DataHolder from './components/DataHolder';
// let datalist:Object[] = []
const ApiCall = () => {
  const [datalist,setdatalist] = useState([])
  const fetchData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
    // alert(JSON.stringify(response.data))
    // datalist=response.data
    setdatalist(response.data)
    alert(JSON.stringify(datalist))
  })
  };

  const renderItem = ({item,index}:{item:any; index:number})=>{
    return(
      <DataHolder
      id={item.id}
      name={item.name}
      username={item.username}
      email={item.email}
      ></DataHolder>
    );
  };
  
  return (
    <View style={styles.container}>
    
    <FlatList
    data={datalist}
    keyExtractor={(item,index)=> 'item' + index}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    ></FlatList>
    
    {/* <TouchableOpacity onPress={()=> fetchData()}>
      <Text>Hello</Text>
    </TouchableOpacity> */} 
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      // flex:1,
      // alignItems:'center',
      // justifyContent:'center',
    },
});

export default ApiCall;
