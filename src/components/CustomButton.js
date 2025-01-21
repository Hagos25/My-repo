import { StyleSheet,View,Text } from "react-native";
const CustomButton=(props)=>{
    const {title,secondButton}=props;
    let backgroundColor,textColor;
    if(secondButton){
        (backgroundColor='white'),(textColor='#7133ff');
    }
    else{
        (backgroundColor='#7133ff'),(textColor='white');
    }
    return(
        <View style={{...styles.container,backgroundColor:backgroundColor}}>
        <Text style ={{bordercolor:textColor,borderWidth:1}}>{title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        height:60,
        marginLeft:'20%',
        marginRight:'20%',
        backgroundColor:'#7133ff',
        marginTop:10,
        
        borderRadius: 5,
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center'
    }
})

export default CustomButton