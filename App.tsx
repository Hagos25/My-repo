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
import SignIns from './src/screens/SignIns';
import Welcome from './src/screens/Welcome';
function App(): React.JSX.Element {
  

  return (
    <View style={styles.container}> 
    <Welcome/>
    <Login/>
      <SignIns/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // This arranges the screens side by side
    flex: 1,
  },
  screen: {
    flex: 1, // Ensures each screen takes equal space
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

/*const styles = StyleSheet.create({
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
*/
export default App;
