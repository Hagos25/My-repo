
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen =()=>{

return(
<Text style={styles.screen}>Welcome to home</Text>
)
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color:'green',
      fontSize: 40, 
    fontWeight: 'bold'
      
    },
  });
export default MainScreen