import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert,Image,TouchableOpacity,FlatList } from 'react-native';
import styles from '../styles/styles';
import AboutUs from './AboutUs'
const sidebar=() =>{
return(
<View style={{flex:1}}>
<View style= {{width:'100%',height:5,backgroundColor:'black'}}></View>
<Image source={require('../assets/images/avt.png')} style={styles.userlogo}/>

<View style ={{ marginTop:50, width:'100%'}}>
    <FlatList
    
    data ={[{icon:require('../assets/images/avt2.png'),title:'AboutUs'}]}
    
    renderItem={({item,index})=>{
      return (
        <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center'}} >
     <Image source={item.icon} style={{marginLeft:15,width:24,height:24}}/>
        <Text style ={{fontSize:16,color:'#000',marginLeft:15}}> {item.title}</Text>
        </TouchableOpacity>
      ); 
    }}
      keyExtractor={(item, index) => index.toString()}
    />
</View>
</View>
)

}
export default sidebar;