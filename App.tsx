/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler.native'

import React from 'react';

import {
  
  StyleSheet,
  
  View,
} from 'react-native';

import Getprofile from './src/screens/GetProfil';

import AppNavigation from './src/navigation/Index';
function App(): React.JSX.Element {
  
  return (
    <View style={styles.backgroundStyles}>
  <AppNavigation/>
   
   </View>
  );
}
const styles = StyleSheet.create({
  backgroundStyles:{
    flex:1,
    backgroundColor:'blue',
    justifyContent: 'flex-start',
  },
  text:{
    fontWeight:'bold',
    fontSize:18
  }
});

export default App;
