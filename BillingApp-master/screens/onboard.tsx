import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


function Onboard(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                BILLING APP
            </Text>
            <TouchableOpacity style={styles.loginBtnWrapper} onPress={() => {navigation.navigate('SignIn');}}>
            <Text style={styles.loginBtn}>login</Text>
            <Text style={styles.loginIcon}>{'>>'}</Text>
            </TouchableOpacity>
            
            
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#2fd7c6",
        flex:1,
        display:'flex',
        justifyContent:"center",
        marginTop:33,
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:30
    },
    loginBtnWrapper:{
        position:'absolute',
        bottom:20,
        right:40,
        display:'flex',
        flexDirection:'row'
    },
    loginBtn:{
        textTransform:"uppercase",
        fontSize:20,
        color:'#fff'
    },
    loginIcon:{
        fontSize:20,
        color:'#fff',
        paddingLeft:15,
    }
});
export default Onboard