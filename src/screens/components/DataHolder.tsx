import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

type datas = {
    id: number;
    name: string;
    username: string;
    email: string;
};
const DataHolder = ({id,name,username,email}:datas) => {
  return (
    <View style={styles.containerStyle}>
       <Text style={styles.itemStyle}>UserId: {id}</Text>
       <Text style={styles.itemStyle}>Name: {name}</Text>
       <Text style={styles.itemStyle}>UserName: {username}</Text>
       <Text style={styles.itemStyle}>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
containerStyle: {
    margin: 10,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    },
    itemStyle: 
    {
        fontSize: 25
    }, 
});

export default DataHolder;
