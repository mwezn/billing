
import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView, ScrollView} from 'react-native';
import { Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryProducts from '../components/category';
import Loading from './loading';
const productDetails=({route}:any)=>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData]:any = useState([]);
    const navigation = useNavigation();
    const [quantity,setQuantity]=useState('1');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+route.params.paramKey)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <Text onPress={() => {navigation.goBack();}} style={{fontSize:15, fontWeight:'bold', alignSelf:'center',color:'#fff'}}>BACK</Text>
           <View style={{alignSelf:'center'}}>
            <Text style={styles.cartAmount}>5</Text>
            <MaterialCommunityIcons style={{color:'#fff',marginRight:10}} name="cart" size={30} />
    </View>
       </View>
        <ScrollView >
        {isLoading ? <Loading /> : 
        (  <SafeAreaView style={{flex: 1}} >
        
             <View style={styles.product}>
            <Image source={{uri: data.image}} style = {{height: 300,width:'60%',marginLeft:'20%', resizeMode : 'stretch' }}/>
           <View style={{width:'90%',marginLeft:'5%',flex:1}}>
            <Text style={{marginTop:5,marginBottom:3,marginLeft:5}}>Name: {data.title}</Text>
            <Text style={{marginTop:5,marginBottom:3,marginLeft:5}}>Price: {data.price}</Text>
            <Text style={{marginTop:5,marginBottom:3,marginLeft:5}}>Description: {data.description}</Text>
            <View style={styles.buttonGroup}>
                <View style={styles.minusBtn}>
                    <Image style={{marginTop:15}} source={require('../assets/images/minus.png')} />
                </View>
                <TextInput style={{height:40,marginLeft:10,marginRight:10}} value={(quantity)}/>
                <View style={styles.addBtn}>
                <Image style={{marginTop:10}} source={require('../assets/images/add.png')} />
                </View>
            </View>
            
            </View>
            
        </View>
        
        <CategoryProducts category={data.category} id={data.id}/>
        
      </SafeAreaView>
        
        )}
        
        
        
      </ScrollView>
      </View>
          );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FDFDFD',
        flex:1,
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
   
  product:{
      width:'95%',
      marginLeft:'2.5%',
    //   height:550,
      paddingBottom:15,
      shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
      marginTop:28,
      backgroundColor:'#fff'
  },
  buttonGroup:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      position:'relative',
      alignSelf:'center',
      bottom:10,
      right:30,
      marginTop:20
  },
  minusBtn:{
      width:60,
      height:40,
      backgroundColor:'#fd7c72',
      borderRadius:10,
      alignItems:'center'
  },
  addBtn:{
    width:60,
    height:40,
    backgroundColor:'#2fd7c6',
    borderRadius:10,
    alignItems:'center'
  },
  cartAmount:{
    position:'absolute',
    right:5,
    top:-10,
    color:'#fd7c72',
},
actionGroup:{
    width:'90%',
    height:'4em',
    display:'flex',
    justifyContent:'space-between',

},

});
export default productDetails