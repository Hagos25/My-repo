import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/landing.png')} 
        style={styles.image}
      />

      
      <Text style={styles.boldText}>Welcome</Text>
      <Text style={styles.descriptionText}>Manage your response</Text>
      <Text style={styles.boldText}>Seamlessly & Intuitively</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.googleButtonContent}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
              }} 
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#007BFF', 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop:40,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#e0e0e0', 
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  googleButton: {
    backgroundColor: '#fff', 
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', 
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    width: 20, 
    height: 20,
    resizeMode: 'contain',
  },
  googleButtonText: {
    color: '#000', 
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  createAccountButton: {
    backgroundColor: '#0056b3', 
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#fff', 
  },
  signInText: {
    fontSize: 16,
    color: '#FFCC00', 
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Welcome;
