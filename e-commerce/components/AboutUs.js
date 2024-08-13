 import React from 'react';
import { View, Text, Button,ImageBackground, ScrollView } from 'react-native';
import styles from '../styles/styles';
 
 const HomeScreen = ({navigation}) => {
  return (
       <ImageBackground source={{ uri: "https://preview.redd.it/iphone-8-bit-wallpaper-i-designed-v0-eyxy8tti54kb1.jpg?width=640&crop=smart&auto=webp&s=aed24cb814011ee1e9a1370884df67b0adbc2736"}} style={styles.imageBackground}> 
        <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
            About Us
         </Text>
  <Text style={styles.para}>
Welcome to SNEAKERHEAD, your ultimate destination for the latest and greatest in sneaker fashion. At Sneakerhead, we're more than just a marketplace; we’re a community of sneaker enthusiasts dedicated to bringing you the freshest styles, exclusive releases, and the best customer experience.
</Text>

<View style={styles.textSpacing}/>

<Text style={styles.para}>
Our Story
Sneakerhead was born out of a shared passion for sneakers. Our founders, lifelong sneakerheads themselves, wanted to create a space where everyone from casual buyers to die-hard collectors could find their perfect pair. Since our launch, we’ve grown into a vibrant community that connects sneaker lovers from all over the world.
</Text>


<View style={styles.textSpacing}/>

<Text style={styles.para}>
Meet the Team
Behind every great sneaker is a team of dedicated individuals working tirelessly to ensure you get the best products and service. Here’s a glimpse at the people who make SneakPeak possible:
</Text>


<View style={styles.textSpacing}/>

<Text style={styles.para}>
 Aliva Barick - Lead Front-End Developer
Aliva is the visionary behind the overall look and feel of our website. With a keen eye for design and extensive coding skills, she leads the team in developing innovative solutions that enhance user interaction and engagement.
</Text>


<View style={styles.textSpacing}/>

<Text style={styles.para}>
 Gaurab Pradhan - UI/UX Designer
 Gaurab’s expertise in user interface and user experience design has been instrumental in creating a seamless shopping journey. He conducts thorough user research and testing to design interfaces that are not only beautiful but also intuitive and easy to navigate.
 </Text>
 

<View style={styles.textSpacing}/>

<Text style={styles.para}>
 Pritish Kumar Lenka - Front-End Developer
Pritish’s proficiency in HTML, CSS, and JavaScript brings our designs to life. He focuses on coding and implementing the visual elements that you interact with, ensuring they are responsive across all devices.
 </Text>
 

<View style={styles.textSpacing}/>

<Text style={styles.para}>
 Sutikhna Behera - Front-End Tester
Sutikhna is responsible for testing and quality assurance of our front-end. He meticulously tests each feature and page to identify and fix any issues before they reach our users.
</Text>


<View style={styles.textSpacing}/>

<Text style={styles.para}>
Aryan Mishra- Accessibility Specialist
Arya ensures that our app is accessible to everyone, regardless of their abilities. He reviews our designs and code to ensure compliance with accessibility standards, making sure that all users have a positive experience on Sneakerhead.
</Text>


<View style={styles.textSpacing}/>

<Text style={styles.para}>
 Collaboration and Innovation
Our front-end team works collaboratively, combining their diverse skills and perspectives to create a cohesive and engaging user experience. Through regular meetings, code reviews, and brainstorming sessions, they ensure that every aspect of our app is carefully crafted and continuously improved
</Text>


<View style={styles.textSpacing}/>

 <Button title='Go Back' onPress={()=>navigation.navigate('Home')}/>
      </ScrollView>      
            </View>
            </ImageBackground>
      );
      };
export default HomeScreen;