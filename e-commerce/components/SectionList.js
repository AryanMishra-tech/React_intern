import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert, SectionList, Switch } from 'react-native';
import styles from '../styles/styles';
const sections = [
    { title: 'cakes', data: ['cheesse cake', 'chocolate lava cake', 'red velvet cake'] },
  //{ title: 'mousse', data: ['Chocolate mouse', 'Vanilla mousse', 'Choco Vanilla mousse'] },
  { title: 'pastries', data: ['Black Forest', 'Blueberry', 'Mango satry'] },
];

 
 
const Lists = ({navigation}) =>  {

  const [isEnabled, setIsEnabled] = useState(false);
 const [backgroundColor,setBackgroundColor] = useState('Dark Cyan');
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBackgroundColor(previousBg => previousBg == '#008B8B'?'#fff':'#008B8B');
  };

   const logout = () => {
    navigation.navigate('GettingStarted');
    //setLoginForm({ username: '', password: '' });
  };
  return  (
<View style={[styles.container, { backgroundColor: isEnabled ? '#800000' : '#008B8B' }]}>
    
          <Text style={[styles.text,  { color: isEnabled ? '#008B8B' : '#800000' }]}>Listed Items </Text>
           <SectionList
            sections={sections}
             keyExtractor={(item, index) => item+index}
             renderItem={({ item }) => (
               <View style ={styles.item}>
             <Text style={styles.item}>{item}</Text>
             </View>)}

               renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
              //renderSectionHeader={({ section: title }) => <Text style={styles.header}>{section.title}</Text>}
              //keyExtractor={(item, index) => item+index}
          />

          

         <Switch
         trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        
       
       <Button title="Logout" onPress={logout} />
        
       </View>
      );
      };

      export default Lists;