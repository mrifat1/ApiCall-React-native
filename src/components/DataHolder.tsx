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
    <View style={styles.container}>
       <Text style={styles.textContainer}>UserId: {id}</Text>
       <Text style={styles.textContainer}>Name: {name}</Text>
       <Text style={styles.textContainer}>UserName: {username}</Text>
       <Text style={styles.textContainer}>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    },
    textContainer: 
    {
        fontSize: 25
    }, 
});

export default DataHolder;
