import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


function Notification(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
               
               <TouchableOpacity style={styles.toggleBar}>
                   <Text style={styles.toggle}></Text>
                   <Text style={styles.toggle}></Text>
                   <Text style={styles.toggle}></Text>
               </TouchableOpacity>
               <Text style={styles.HeaderTitle}>Products</Text>
               <View style={{alignSelf:'center'}}>
           <Text style={styles.cartAmount}>5</Text>
           <MaterialCommunityIcons style={{color:'#fff',marginRight:10}} name="cart" size={30} />
   </View>
           </View>
            <Text >
                Notification
            </Text>
            <TouchableOpacity >
            <Text>login</Text>
            <Text></Text>
            </TouchableOpacity>
            
            
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FDFDFD'
    },
    header:{
        width:'100%',
        height:90,
        backgroundColor:'#2fd7c6',
        display:'flex',
        flexDirection:'row',
        paddingTop:30,
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    HeaderTitle:{
        fontSize:16,
        textTransform:'uppercase',
        color:'#fff',
        alignSelf:'center'
    },
    toggleBar:{
        display:'flex',
        alignSelf:'center',
    },
    toggle:{
        backgroundColor:'#fff',
        width:30,
        height:4,   
        marginTop:5,
        borderRadius:2
     },
     cartAmount:{
        position:'absolute',
        right:5,
        top:-10,
        color:'#fd7c72',
    }
})

export default Notification