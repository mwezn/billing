
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function SignInScreen(){
    const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("dummy username and pass")
    const navigation = useNavigation();
 function Login() {
     if (Username != "" && Username.length >=5){
        if (password != "" && password.length >=5){
            let isLoggedIn=true;
            navigation.navigate('Home',{
                params: {isLoggedIn}
            })
        }else{
            setMessage('wrong password');
        }
     }else{
         setMessage('please, enter a valid username');
     }
 }

 
    return(
        
        <View style={styles.container}>
            <View style={styles.header}><Text onPress={() => {navigation.goBack();}} style={{fontSize:15, fontWeight:'bold', alignSelf:'center',color:'#fff'}}>BACK</Text><Text style={styles.headerText}>LOGIN</Text><Text style={{fontSize:15,color:'transparent'}}>Back</Text></View>
            <View style={styles.loginWrapper}>
                <Text style={{marginTop:25,left:'5%',marginBottom:30}}>USER INFO</Text>

                <View style={{backgroundColor:'#fd7c72',width:'90%',marginLeft:'5%',marginBottom: 20,height:40,borderRadius:5}}><Text style={{color:'#fff',marginTop:5,textAlign:'center'}}>{message}</Text></View>
               
                <StatusBar style="auto" />
                <View style={{width:'90%',display:'flex',alignSelf:'center',marginBottom:30,}}>
                
                <TextInput 
                
                style={styles.input}
                onChangeText={(Username) => setUsername(Username)}
                placeholder="Enter Username: "/>
        </View>
        <View style={{width:'90%',display:'flex',alignSelf:'center',marginBottom:30,}}>
        
        <TextInput 
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                placeholder="Enter Password: "/>
        </View>
        <TouchableOpacity>
                       <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
                <TouchableWithoutFeedback onPress={Login}>
                    <View style={styles.loginBtn}>
                    <Text style={{color:'#fff',}}>LOGIN</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>

    );
}
const styles=StyleSheet.create({
   container:{
       backgroundColor:'#EDEDED',
       flex:1,
       marginTop:28,
   },
   loginWrapper:{
      alignSelf:'center',
      width:'95%',
      backgroundColor:'#fff',
      height:400,
      marginTop:75,
   },
   header:{
       height:60,
       backgroundColor:'#2fd7c6',
       display:'flex',
       flexDirection:'row',
       justifyContent:"space-between",
       paddingLeft:15,
       paddingRight:15,
   },
   headerText:{
       color:'#fff',
       alignSelf:'center',
       fontSize:20,
       fontWeight:'bold'
   },
   loginBtn:{
       width:'90%',
       height:50,
       backgroundColor:'#2fd7c6',
       marginLeft:'5%',
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:"center",
   },
   input:{
    borderWidth: 1,
    borderColor: "#2fd7c6",
    height:50,
    borderRadius: 6,
    width:'100%',
    paddingLeft:8,
    
   },
   forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign:'center'
  },
});
export default SignInScreen