import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import _sigiInWithGoogle from './src/config/firebase/GoogleSignin';

const App = () => {

   async function googleSignIn () {
    
    _sigiInWithGoogle().then(data => {
      if(!data) {
        console.log('=>Error','No Data');
        return
      }
      console.log('=>Success', data)
    })

    
        
   }
  return (
   <View style={styles.container}>

      <Text style={styles.text1}>Login Page</Text>
       <Text style={styles.text}>Username:</Text>
       <TextInput
         style = {styles.inputbox}
          placeholder='Username'
         />
         <Text style={styles.text}>Password:</Text>
         <TextInput
           style = {styles.inputbox}
           placeholder='Password'
           />
           <TouchableOpacity style={styles.button}>
                 <Text style={{color:'white', fontSize:15}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.google}
               onPress={() => googleSignIn()}
              
            >
                  <Text style={{color:'#fff', fontSize:15,}}>Login with GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity 
               style={styles.facebook}
              
            >
                  <Text style={{color:'#fff', fontSize:15,}}>Login with Facebook</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
               style={styles.google}
               onPress={onpressHandler}
            >
                  <Text style={{color:'#fff', fontSize:20,}}>Login with apple</Text>
            </TouchableOpacity> */}
   </View>
  

  )
}
 const styles = StyleSheet.create ({
  container: {
    flex:1,
    margin:20,
    marginTop:100,
  },
  text1: {
    fontSize:30,
    textAlign:'center',
    color:'black',
    marginBottom:20,
  },
  inputbox: {
    borderWidth:1,
    width:300,
    borderRadius:6,
    margin:2,
    marginLeft:20
  },
  text: {
    fontSize:20,
    color:'black',
    marginLeft:20,
    margin:10,
  },
  button: {
    width: 100,
    backgroundColor:'green',
    margin:10,
    borderRadius:5,
    marginLeft: 20,
    alignItems:'center'
  },
  google: {
    borderWidth:1,
    padding:5,
    backgroundColor:'#000',
    borderRadius:5,
    margin:30,
    alignItems:'center'
  },
  facebook: {
    borderWidth:0.5,
    padding:5,
    backgroundColor:'blue',
    borderRadius:5,
    marginLeft:30,
    marginRight:30,
    alignItems:'center'

  }
 })

export default App;