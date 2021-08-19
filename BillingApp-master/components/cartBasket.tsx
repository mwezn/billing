import React, { StyleSheet, View,Text } from 'react-native';

function CartBasket(){
    return(
    <View style={{alignSelf:'center'}}>
            <Text style={styles.cartAmount}>5</Text>
            {/* <MaterialCommunityIcons style={{color:'#fff'}} name="cart" size={30} /> */}
    </View>

    );
}

const styles=StyleSheet.create({
    cartAmount:{
        position:'absolute',
        right:0,
        color:'#fd7c72',
    }
});

export default CartBasket