import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,Text, StyleSheet } from 'react-native';
function Logout(){
    const navigation = useNavigation();
    useEffect(() => {
        navigation.navigate('Logout');
      }, []);
    return(
        <View>
        <View style={styles.header}>
               
        <Text style={styles.HeaderTitle}>Logout</Text>
    </View>
    </View>
    )
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
});
export default Logout;