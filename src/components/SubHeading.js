import { StyleSheet,View,Text } from "react-native";
const SubHeading=(props)=>{
    const {text}=props;
    return(
        <Text style ={styles.text}>{text}</Text>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#3d3d3',
        marginLeft:'10%',
        marginRight:'10%'
    }
})

export default SubHeading