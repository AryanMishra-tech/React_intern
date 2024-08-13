import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';
 
 const GettingStarted = ({ navigation }) => {
  return (
           
        <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/178/512/HD-wallpaper-sneakers-hype-jordan-klekt-nike-shoes-stock-x-we-the-new.jpg'}} style={styles.imageBackground}>
          <View style={styles.container}>
            <View style={styles.box}>
            <Text style={styles.title}>SNEAKERHEAD</Text>
            <Text style={styles.bottomtitle}> For The Perfect You.</Text>
            <Button title='Login' onPress={()=>navigation.navigate('Login')}/>
              <View style={styles.buttonSpacing}/>
          <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
            </View>
            
        </View>
          </ImageBackground>
      );
      };
export default GettingStarted;