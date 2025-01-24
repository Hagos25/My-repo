

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SignIns = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setIsUsernameValid(text.length >= 3);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 6);
  };

  return (
    <View style={styles.container}>
      {/* Top Arrow */}
      <TouchableOpacity style={styles.topArrow}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* "Sign In" Section */}
      <View style={styles.blueBackground}>
        <Text style={styles.signInText}>Sign In</Text>
      </View>

      {/* Welcome Back Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>Please sign in to continue</Text>
      </View>

    
      <Text style={styles.inputLabel}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={handleUsernameChange}
      />
      {isUsernameValid && <Icon name="checkmark-circle" size={24} color="green" />}

    
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#888"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {isPasswordValid && <Icon name="checkmark-circle" size={24} color="green" />}

    
      <TouchableOpacity>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
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
    color:'white'
  },
  blueBackground: {
    backgroundColor: '#007BFF',
    paddingVertical: 40,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  forgetPasswordText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'right',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default SignIns;
