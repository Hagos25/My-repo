
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import {  useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  {/*const [isUsernameValid, setIsUsernameValid] = useState(false);*/}
  {/*const [isPasswordValid, setIsPasswordValid] = useState(false);*/}
 const navigation=useNavigation()

 const onSignInsPressed=()=>{
  Alert.alert('Navigation Object:', navigation); 
  navigation.navigate('Main');

  console.log(navigation);
 }
 
  const handleUsernameChange = (text) => {
    setUsername(text);
   { /*setIsUsernameValid(text.length );*/}
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
   { /*setIsPasswordValid(text.length );*/}
  };

  return (
    <View style={styles.container}>
     
    { /* <TouchableOpacity style={styles.topArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
*/}
     
      <View style={styles.greenBackground}>
        <TouchableOpacity style={styles.signInGreenButton} onPress={onSignInsPressed}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>Please sign in to continue</Text>
      </View>

  
      <Text style={styles.inputLabel}>Username</Text>
      <TextInput
        style={styles.hiddenInput}
        placeholder="Enter username"
        placeholderTextColor="#ccc"
        value={username}
        onChangeText={handleUsernameChange}
      />
      {/*{isUsernameValid && <Icon name="checkmark-circle" size={24} color="green" />}*/}

     
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.hiddenInput}
        placeholder="Enter password"
        placeholderTextColor="#ccc"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
    {/* {isPasswordValid && <Icon name="checkmark-circle" size={24} color="green" />}*/}

    
      <TouchableOpacity>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.grayButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

     
      <View style={styles.signUpSection}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  topArrow: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  greenBackground: {
    backgroundColor: 'blue',
    paddingVertical: 40,
    marginBottom: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInGreenButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    extAlign: 'left', 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  hiddenInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#ddd',
    color: '#aaa',
  },
  forgetPasswordText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'right',
    marginBottom: 20,
  },
  grayButton: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signUpSection: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccountText: {
    fontSize: 16,
    color: '#666',
  },
  signUpText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Login;
