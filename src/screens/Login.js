
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setIsUsernameValid(text.length >= 3); 
  }
  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 6); 
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.blueBackground}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>Please sign in to continue</Text>
      </View>

     
      <TouchableOpacity style={styles.backArrow}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      
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
        secureTextEntry={true} // Hides password input
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  blueBackground: {
    backgroundColor: '#007BFF',
    paddingVertical: 40,
    marginBottom: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  backArrow: {
    marginTop: 20,
    marginBottom: 20,
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
});

export default Login;
