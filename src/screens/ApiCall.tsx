import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import DataHolder from './components/DataHolder';

const ApiCall = () => {
  const [datalist,setdatalist] = useState([])
  const callApi = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
    // alert(JSON.stringify(response.data))
    setdatalist(response.data)
    alert(response.data)
  })
  .catch(function(error){
    alert(error)
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
    {datalist.length!=0?(
    <FlatList
    data={datalist}
    keyExtractor={(item,index)=> 'item' + index}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    ></FlatList>):null}

    <TouchableOpacity onPress={()=> callApi()}>
      <Text>Hello</Text>
    </TouchableOpacity>
      
       
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
});

export default ApiCall;
