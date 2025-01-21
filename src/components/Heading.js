import { StyleSheet,View,Text } from "react-native";
const Heading=(props)=>{
    const {text}=props;
    return(
        <Text style ={styles.text}>{text}</Text>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center',
        width:'100%'
    }
})

export default Heading;