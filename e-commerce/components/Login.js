import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

 export default function Login ({navigation}) {
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginChange = () => {
    console.log("I m from login page");
       navigation.navigate('Welcome');
  };

     async function validate() {
    const userDetailString = await AsyncStorage.getItem("userDetail"); //Fetches data in string format
    const userDetail = userDetailString ? JSON.parse(userDetailString) : {}; //converts the string format data into object if not empty else it creates an empty object.
    if (
      userDetail.username === username &&
      userDetail.password === password
    ) {
      handleLoginChange();
    } else {
      alert("INALID");
    }
     }

  return(
          <ImageBackground source={{ uri: 'https://mrwallpaper.com/images/high/air-jordan-cartoon-shoe-8024zrhawjjgd1el.webp'}} style={styles.imageBackground}>
          <View style={styles.logincontainer}>
          
           <View style ={styles.LoginBox}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
         </View>
          
          <Button title='Login' onPress={validate}/>
          </View>
          </ImageBackground>

  );
 }
 
