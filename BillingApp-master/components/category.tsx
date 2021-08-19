
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { ActivityIndicator, FlatList, Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Loading from '../screens/loading';
function CategoryProducts( props: any,{route}: any ){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/'+ props.category)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
      return (
    
        <View style={{ flex: 1}} >
          {isLoading ? <Loading /> : 
          ( 
            <ScrollView style={{flex:1,backgroundColor:'#EDEDED'}}>
            <View style={styles.bigWrap}>
                <View style={{margin:15,marginBottom:15,}}><Text>MORE PRODUCTS FROM THIS CATEGORY</Text></View>
                {data.map((item: any,key: any)=>{
                    return <TouchableHighlight key={item.id} style={styles.wrap} onPress={() =>
                navigation.navigate('ProductDetails', {
                  paramKey: props.id,
                })}>
                    <View style={styles.product}>
              <Image source={{uri: item.image}} style = {{height: 200,width:'100%', resizeMode : 'stretch' }}/>
              <Text style={{marginTop:5,marginBottom:3,marginLeft:5}}>{item.title}</Text>
              <Text style={{backgroundColor:'#fd7c72',paddingTop:5,color:'#fff', width:'100%',textAlign:'center',position:'absolute',bottom:0,height:35}}>$ {item.price}</Text>
          </View>
          </TouchableHighlight>
                })}
                 <View style={styles.moreBtn}><Text style={{color:'#fff',textAlign:'center'}}>more</Text></View>
            </View>
           
        </ScrollView>
                
          )}
        </View>
            );
}
const styles=StyleSheet.create({
    bigWrap:{
        width:'98%',
        display:'flex',
        marginLeft:'2%',
        flexDirection:'row',
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
export default CategoryProducts