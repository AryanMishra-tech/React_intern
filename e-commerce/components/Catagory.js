import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert,TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Product from '../components/Product';

const Catagory =({item,selectedcatagory,setSelectedcatagory}) => {
  return (
    <View>
    <TouchableOpacity onPress={()=>setSelectedcatagory(item)}>
    <Text style={[styles.catagoryText, selectedcatagory===item &&{color:'#fff',backgroundColor:'#E96E6E'},]}>{item}</Text>
    </TouchableOpacity>

    <Product/>
    </View>
  )
}

export default Catagory;