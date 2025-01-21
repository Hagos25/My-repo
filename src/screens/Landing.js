import { StyleSheet,View, Text, Image,TouchableOpacity, Button} from "react-native";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import SubHeadingSe from "../components/SubHeadingSe";
import CustomButton from "../components/CustomButton";
const Landing =props =>{
    return(
        <View style={styles.container}> 
        <Image style= {styles.image} source={require('../../assets/landing.png')}/>
       <Heading text={'Welcome'}/>
       <SubHeading text={'Mange your expenses'}/>
       <SubHeadingSe text={'Samelessly& intuitively'}/>
       <TouchableOpacity>
       
       <CustomButton title={'Singin with google'} secondButton ={true} style={styles.Button}/>
       <CustomButton title={'Create anAccount'} />
       </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        

    },
    image:{
        height:200,
        width:250,
        marginTop: 80,
        
    },
    Button:{
        width: '100%'

    }
})

export default Landing;