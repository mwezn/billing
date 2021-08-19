
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Loading from './loading';
function Products(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData]: any[] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
      return (
    
        <View style={{ flex: 1}} >
          {isLoading ? <Loading /> : 
          ( 
            <ScrollView style={{flex:1}}>
            <View style={styles.bigWrap}>
                {data.map((item :any,key: any)=>{
                    return <TouchableHighlight key={item.id} style={styles.wrap} onPress={() =>
                navigation.navigate('ProductDetails', {
                  paramKey: item.id,
                })}>
                    <View style={styles.product}>
              <Image source={{uri: item.image}} style = {{height: 200,width:'100%', resizeMode : 'stretch' }}/>
              <Text style={{marginTop:5,marginBottom:3,marginLeft:5}}>{item.title}</Text>
              <Text style={{backgroundColor:'#fd7c72',paddingTop:5,color:'#fff', width:'100%',textAlign:'center',position:'absolute',bottom:0,height:35}}>$ {item.price}</Text>
          </View>
          </TouchableHighlight>
                })}
            </View>
            <View style={styles.moreBtn}><Text style={{color:'#fff',textAlign:'center'}}>more</Text></View>
 
        </ScrollView>
                
          )}
        </View>
            );
}
const styles=StyleSheet.create({
    bigWrap:{
        width:'96%',
        display:'flex',
        flexDirection:'row',
        marginLeft:'2%',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    wrap:{
        width:'48%',
        backgroundColor:'transparent',
        height:300,
        marginTop:15,
    },
    product:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    moreBtn:{
        width:70,
        height:30,
        textAlign:'center',
        color:'#fff',
        borderRadius:5,
        marginLeft:'42%',
        backgroundColor:'#fd7c72',
        marginTop:20,
        marginBottom:20,
    }
});
export default Products