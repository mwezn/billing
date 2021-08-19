
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './routes/homestack';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8F5F2',
  },
});
