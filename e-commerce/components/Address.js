import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground, TouchableOpacity,Alert } from 'react-native';
import styles from '../styles/styles';


const Address=({navigation}) => {
   
   const [name, setName] = useState('');
  const [pl, setPl] = useState('');
  const [locality, setLocality] = useState('');
  const [pin, setpin] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');



      const Proceed =() => {
     navigation.navigate('ConformPage')
 };

 return(
        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/58/d5/39/58d53958e31f7859180446c470bc66af.jpg'}} style={styles.imageBackground}>
          <View style ={styles.delSignUpBox}>
          <Text style={styles.title}>Delivery</Text>
          <TextInput
            style={styles.delInput}
            placeholder="Reciever's Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="PlotNo."
            value={pl}
            onChangeText={setPl}
          />
          <TextInput
            style={styles.input}
            placeholder="Locality"
            value={locality}
            onChangeText={setLocality}
          />
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            value={pin}
            onChangeText={setpin}
          />
           <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
           <TextInput
            style={styles.input}
            placeholder="ODISHA"
            value={state}
            onChangeText={setState}
          />

          
          <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={(Proceed)}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
         
         <Text style={styles.delNote}>note: Only COD/UPI payment option is avaliabe</Text>
         </View>
         </ImageBackground>
      );
}
      export default Address;