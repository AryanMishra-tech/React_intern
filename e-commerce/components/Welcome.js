
import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import AboutUs from '../components/AboutUs';
import GettingStarted from '../components/GettingStarted';
import { TabRouter } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

const MainScreen=()=>{
    return(
        <Drawer.Navigator> 
            <Drawer.Screen  
             name='HomeScreen'
             component={HomeScreen}
             options={{headerShown:false}}/>
            <Drawer.Screen  
             name='AboutUs'
             component={AboutUs}
             options={{headerShown:false}}/>
             <Drawer.Screen
             name='LogOut'
             component={GettingStarted}
             options={{headerShown:false}}/>
        </Drawer.Navigator>
    );
};

export default MainScreen;