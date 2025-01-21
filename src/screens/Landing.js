import { StyleSheet,View, Text, Image,TouchableOpacity} from "react-native";
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
       
       <CustomButton title={'Singin with google'} secondButton ={true}/>
       <CustomButton title={'Create anAccount'} />
       </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image:{
        height:200,
        width:200,
        marginTop: 20,
        marginTop: 10
    }
})

export default Landing;