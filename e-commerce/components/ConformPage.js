import React from 'react';
import { View, Text, StyleSheet, Button,Image } from 'react-native';
import styles from '../styles/styles';

const OrderPlacedScreen = ({ navigation }) => {
  return (
    <View style={styles.ConformContainer}>
    <Image source={require('../assets/tick2.jpeg')} style={styles.userlogo}/>
    <View style={styles.buttonSpacing}/>
      <Text style={styles.title}>Order Placed Successfully!</Text>
      <Text style={styles.message}>Thank you for your purchase. Your order has been placed successfully.</Text>
      <Button
        title="Done"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};



export default OrderPlacedScreen;