
import React from 'react';
import { View, Text, FlatList, StyleSheet,ScrollView ,Image } from 'react-native';
const Getprofile=()=>{
    const contacts = [
        { id: '1', name: 'Gere Doe', phone: '123-456-7890' },
        { id: '2', name: 'Jane Smith', phone: '098-765-4321' },
        { id: '3', name: 'Tekle Jackson', phone: '555-555-53334' },
        { id: '4', name: 'mokenen Adams', phone: '222-333-4453' },
        { id: '5', name: 'kere Doe', phone: '123-456-7890' },
        { id: '6', name: 'halefom Smith', phone: '098-765-4451' },
        { id: '7', name: 'Tekle Jackson', phone: '555-555-58332' },
        { id: '8', name: 'mesfin Adams', phone: '222-333-4453' },
        { id: '9', name: 'Gere Doe', phone: '123-456-7890' },
        { id: '10', name: 'Jane Smith', phone: '098-765-4321' },
        { id: '11', name: 'Tekle Jackson', phone: '555-555-53334' },
        { id: '12', name: 'mokenen Adams', phone: '222-333-4453' },
        { id: '13', name: 'kere Doe', phone: '123-456-7890' },
        { id: '14', name: 'halefom Smith', phone: '098-765-4451' },
        { id: '15', name: 'Tekle Jackson', phone: '555-555-58332' },
        { id: '16', name: 'mesfin Adams', phone: '222-333-4453' },
      ];
      const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
            
        
          <Text>{item.name}</Text>
          <Text>{item.phone}</Text>
        </View>
      );


     return (
<View style={styles.screenContainer}>
      <Text style={styles.header}>Contacts List</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem} // Call renderItem here
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    contactItem: {
    
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginBottom: 10,
    },
  });
 export default Getprofile;