import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import {  useNavigation } from '@react-navigation/native';

const Main=(props)=>{
    const {text}=props;
    return(
        
        <Text style ={styles.text}>{props.text} 
          
          Material Top Tabs Navigator   : A material-design themed tab bar on the top of the screen that lets you switch between different routes 
          by tapping the tabs or swiping horizontally. 
          Transitions are animated by default. Screen components for each route are mounted immediately.
          </Text>
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color:'red'
    },
  });

export default Main;