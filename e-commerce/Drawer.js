import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../components/Welcome';
import GettingStarted from '../components/GettingStarted';
import AboutUs from '../components/AboutUs';
import sidebar from '../components/sidebar';
import { TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator  initialRouteName="Welcome">
      <Drawer.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Log Out"
        component={GettingStarted}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default function MainScreen() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}
/*import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../components/Welcome';
import { TabRouter } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const MainScreen=()=>{
    return(
        <Drawer.Navigator drawerContent={props => <sidebar{...props}/>}>
            <Drawer.Screen  
             name='Welcome'
             component={Welcome}
             options={{headerShown:TabRouter}}/>
        </Drawer.Navigator>
    );
};

export default MainScreen;*/


