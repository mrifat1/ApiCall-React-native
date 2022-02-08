import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Button} from 'react-native';
import axios from 'axios';
import DataHolder from '../components/DataHolder';
// let datalist:Object[] = []
const ApiCall = () => {
  const [datalist,setdatalist] = useState([]);
  async function fetchData (){
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // .then(function(response){
    // JSON.stringify(response.data)
    // datalist=response.data
    setdatalist(response.data);
    // alert(JSON.stringify(datalist))
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);


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
      {/* <TouchableOpacity style={styles.buttonContainer} onPress={()=> fetchData()}>
      <Text>Fetch Data</Text>
    </TouchableOpacity> */}
    
    <FlatList
    data={datalist}
    keyExtractor={(item,index)=> 'item' + index}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    ></FlatList>
    
   
    </View> 
  );
};

const styles = StyleSheet.create({
    container:{
      // flex:1,
      // alignItems:'center',
      
    },
    // buttonContainer:{
    //   height: 20,
    //   width:90,
    //   backgroundColor:'green',
    // },
});

export default ApiCall;
