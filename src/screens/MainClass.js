import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { Alert } from "react-native";
class MainClass extends React.Component{
    constructor(props){
super(props)
this.state = {
    items: [], // List of items
    
  };
  Alert.alert('Constructor: created');
}
componentDidMount() {
    Alert.alert('componentDidMount: Component is now mounted');

    this.setState({
      items: ['Item1', 'Item2', 'Item3','Item4','Item4'],
     
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    Alert.alert('shouldComponentUpdate: Should the component update?');
    return true; 

  }

  componentDidUpdate(prevProps, prevState) {
    Alert.alert('componentDidUpdate: Component re-rendered');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

componentWillUnmount() {
    Alert.alert('componentWillUnmount: Component is being unmounted');
  }

  addItem = () => {
    const { items } = this.state;
    // Corrected way to add an item
    this.setState({ items: [...items, `Item ${items.length + 1}`] });
  };
render (){
    return (
<View style={styles.container}> 
<Text style={styles.title}>ItemList</Text>
<FlatList
data={this.state.items}
keyExtractor={(item, index) => index.toString()}
renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
/>

<View style={styles.buttonContainer}>
<Button title="Add Item"  onPress={this.addItem}/>

</View>



</View>

    )
}
}
const styles=StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
           backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      item: {
        fontSize: 18,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
})
export default MainClass;