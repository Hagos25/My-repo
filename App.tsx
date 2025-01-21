/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Landing from './src/screens/Landing';
import Login from './src/screens/Login';


function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={styles.backgroundStyles} >
      <Login/>
      
    </SafeAreaView>
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
