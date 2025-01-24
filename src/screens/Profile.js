import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';
function Profile() {
    return (
      <View style={styles.container}>
        {/* Profile Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} // You can replace this URL with any image URL
            style={styles.avatar}
          />
          <Text style={styles.username}>Hagos</Text>
          <Text style={styles.status}>Active</Text>
        </View>
  
        {/* Bio Section */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioTitle}>Bio</Text>
          <Text style={styles.bio}>
            Passionate about technology and coding. Exploring the world of React Native and building
            cool apps. Always learning, always growing!
          </Text>
        </View>
  
        {/* Social Links */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Twitter</Text>
          </TouchableOpacity>
        </View>
  
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f7f7f7',
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    username: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    status: {
      fontSize: 16,
      color: 'green',
    },
    bioContainer: {
      marginBottom: 20,
    },
    bioTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    bio: {
      fontSize: 16,
      color: '#555',
      lineHeight: 22,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    socialButton: {
      backgroundColor: '#0077b5', // LinkedIn blue
      padding: 10,
      borderRadius: 5,
    },
    socialText: {
      color: '#fff',
      fontSize: 16,
    },
    editButton: {
      backgroundColor: '#3498db', // Blue color
      padding: 12,
      borderRadius: 5,
      alignItems: 'center',
    },
    editButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  export default Profile;