import React, {useState} from 'react';
import { View, Text, Button,ImageBackground,TouchableOpacity,Image,FlatList} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Catagory from '../components/Catagory';
import Product from '../components/Product';

 const HomeScreen = ({navigation}) => {
    const catagories = ['TrendingNow', 'Men','Women','Kids'];
  const [selectedcatagory, setSelectedcatagory]=useState('TrendingNow');
  return (
       <View style={{flex:1, backgroundColor:'#000'}}>
           <View style={styles.headers}>
           <TouchableOpacity style={{marginLeft:20}} onPress={()=>{ navigation.openDrawer() }}>
           <Icon name = "menu" size={30} color="#000"/>
           </TouchableOpacity>
           <Text> WELCOME </Text>
           </View>
           <Image source={require('../assets/banner.jpeg')} style={{width:'90%', height:120,borderRadius:10,alignSelf:'center', marginTop:20}}/>

        <View style={styles.catagoryContainer}>
       <FlatList 
         data={catagories}
         keyExtractor={(item)=>item} 
         renderItem={({item})=> <Catagory item={item} 
         selectedcatagory={selectedcatagory}
          setSelectedcatagory={setSelectedcatagory}
          />
       }
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         />
      </View>
      <View style={{flex:1,backgroundColor:'#000'}}> 
       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5,marginTop:5}}>
        <Product catagory={selectedcatagory} />
        </View>
        </View>
       </View>
      );
      };
export default HomeScreen;