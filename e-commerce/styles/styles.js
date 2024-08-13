import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position:'relative',
    
  },
  
  page: {
    width: '100%',
    padding: 20,
  },

   message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },

   box:{
 flex:1,
 width:'100%',
 height:'20%',
 alignItems:'center',
 flexDirection:'coloum',
 justifyContent:'center',
 backgroundColor:'rgba(255, 255, 255, 0.8)',
 borderRadius:50,
 alignSelf:'center',

  },

  SignUpBox:{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 7,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        //elevation: 5,
        marginVertical: 10,
        padding: 11,
        width:'200%',
        alignItems: 'center',
    },

    delSignUpBox:{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        //borderRadius: 7,
        shadowColor: '#000',
        shadowOpacity: 0,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 0,
        marginVertical: 64,
        padding: 11,
        width:'70%',
        alignItems: 'center',
        //flexDirection:'column',
        //alignSelf:'flex-end',
       //justifyContent:'center',

  },



  LoginBox:{
   backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 7,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginVertical: 10,
        padding: 11,
         width:'150%',
       
        alignItems: 'center',
        //flexDirection:'column',
        //alignSelf:'flex-end',
       // justifyContent:'center',

  },

  ConformContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
     padding: 20,
     position:'relative',
   backgroundColor:'#fff',
 },

 
  title: {
    textAlign:'justify',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'sans-serif',
    color:'black',
  },

  
  bottomtitle: {
    textAlign:'justify',
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
    fontFamily: 'sans-serif',
    color:'black',
  },

  para: {
    textAlign:'justify',
    fontSize: 16,
    fontWeight:'bold',
    fontFamily: 'sans-serif',
    color:'black',
  },

  input: {
    width: '100%',
    height: 50,
    borderColor:'black',
    borderWidth: 3,
    marginBottom: 8,
    paddingHorizontal: 10,
    //borderRadius: 50,
    backgroundColor:'white',
  },

 delInput: {
    fontWeight: 'bold',
    width: '90%',
    height: 45,
    borderColor:'black',
    borderWidth: 3,
    marginBottom: 8,
    paddingHorizontal: 10,
    //borderRadius: 50,
    backgroundColor:'white',
  },

  button: {
    padding: 10,
    //borderRadius: 55,
    alignItems: 'bottom',
    marginBottom: 8
    },

   delButton: {
    padding: 10,
    elevation: 50,
    //borderRadius: 55,
    alignItems: 'bottom',
    marginBottom:3
  },

  delNote: {
    textAlign:'justify',
    fontSize: 15,
    //fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 10,
    fontFamily:'georgia',
    color:'black',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bolder',
  },

  text:{
fontSize: 18,
    marginBottom: 20,
    textAlign:'justify',
    fontFamily:'Brush Script MT, Lucida Handwriting',
    backgroundColor:'pink',
    color:'crimson',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign:'justify',
    fontFamily:'Copperplate, Papyrus',
    color:'maroon',
  },

   card: {
    flex:1,
    marginBottom: 10,
    marginVertical:1,
    padding: 10,
    borderColor: '#ddd',
    width:200,
    height:270,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginRight:10,
    },
  cardImage: {
    width: '100%',
    height:100,
    marginBottom: 5,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0
  },
  cardPrice: {
    fontSize: 16,
    color: '#888',
    marginTop:0
  },
  buttonSpacing: {
    marginVertical: 10,
  },

  textSpacing: {
    marginVertical: 10,
  },

 iconButton:{
  marginHorizontal:10,
 },
  imageBackground:{
        width: '100%',
        height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover',
  },

  item:{
      padding: 10,
    fontSize: 18,
    height: 44,
  },

  header:{
    fontSize: 24,
    backgroundColor: '#fff',
  },
  
 
  switch:{
     marginTop: 20,
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer:{
    alignItems:'center',
  },

  navigationBar:{
       position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
  },
   navButton: {
        alignItems: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 12,
    },
    noResultsText: {
        fontSize: 18,
        marginTop: 20,
        color: 'gray',
        textAlign: 'center',
    },

    badge: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        paddingVertical: 2,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
     cardsContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },

     headers: {
       width:'100%',
       height:60,
       flexDirection:'row',
       alignItems:'center',
       elevation:3,
       backgroundColor:'#fff',
    },

  userlogo:{
      marginTop:0,
      width:'100%',
      height:'40%',
  },
 
 logincontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  
 },

 signupcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
   
 },

 catagoryText:{
   fontSize:16,
   fontWeight:'600',
   color:'#938F8F',
   backgroundColor:'#DFDCDC',
   padding:10,
   textAlign:'center',
   borderRadius:20,
   marginHorizontal:10,
   paddingHorizontal:20,
  },

 catagoryContainer: {
    //flex: 1,
    alignItems: 'center',
    padding:10,
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop:5,
   },
 hearto:{
height:24,
width:24,
backgroundColor:'#fff',
justifyContent:'center',
alignItems:'center',
borderRadius:17,
position:'absolute',
top:0,
right:10,
},

 
});
export default styles;