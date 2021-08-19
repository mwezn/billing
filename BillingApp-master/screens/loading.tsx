import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
function Loading() {
    return(
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default Loading