import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet ,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const [storedPassword, setStoredPassword] = useState('');

  useEffect(() => {
    // Retrieve stored username and password on component mount
    const getStoredData = async () => {
      const user = await AsyncStorage.getItem('username');
      const pass = await AsyncStorage.getItem('password');

      if (user && pass) {
        setStoredUsername(user);
        setStoredPassword(pass);
      }
    };

    getStoredData();
  }, []);

  // Save username and password in AsyncStorage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      alert('Data Saved!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Retrieve username and password from AsyncStorage
  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('username');
      const pass = await AsyncStorage.getItem('password');
      if (user && pass) {
        alert(`Stored Username: ${user} \nStored Password: ${pass}`);
      } else {
        alert('No data found!');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  // Remove username and password from AsyncStorage
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      alert('Data Removed!');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };

  // Clear all AsyncStorage data
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      alert('All Data Cleared!');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  // Get all keys in AsyncStorage
  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      alert(`All Keys: ${keys.join(', ')}`);
    } catch (error) {
      console.error('Error getting all keys:', error);
    }
  };

  return (
    <View style={styles.container}>
     < Image
              source={require('../../assets/landing.png')} 
              style={styles.image}/>
            
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Save Data" onPress={saveData} />
      <Button title="Get Stored Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
      <Button title="Clear All Data" onPress={clearData} />
      <Button title="Get All Keys" onPress={getAllKeys} />

      {/* Display Stored Data */}
      {storedUsername && storedPassword && (
        <Text style={styles.storedData}>
          Stored Username: {storedUsername}{"\n"}Stored Password: {storedPassword}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 80,
    marginTop:40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  storedData: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});



export default LoginScreen;
