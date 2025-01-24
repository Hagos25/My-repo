
import 'react-native-gesture-handler';
import Login from "../screens/Login";
import SignIns from "../screens/SignIns";
import Welcome from "../screens/Welcome";
import Main from "../screens/Main";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer"
import MainClass from '../screens/MainClass';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image} from 'react-native';
import MainScreen from '../screens/MainScreen';
import SectionLists from '../screens/SectionLists';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Getprofile from '../screens/GetProfil';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome"component={Welcome} />
      <Stack.Screen name="Login" component={MyTabs} />
      

    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
const TopTabs = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

function MyTopTabs() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarIndicatorStyle: { backgroundColor: "blue" },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      }}
    >
      <TopTabs.Screen name="Main" component={MainScreen} />
      <TopTabs.Screen name="Notifications" component={Profile} />
    </TopTabs.Navigator>
  );
}



function MyTabs() {
  return (

<Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Home" 
        component={MyDrawer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/home.png')} // Replace with your actual image path
              style={{
                width: 20,
                height: 20,
                 
              }}
            />
          ),
        }}
      />
      <Tab.Screen 
      component={MyTopTabs}
        name="seetings" 
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/Setting.png')} // Replace with another image for the Home tab
              style={{
                width: 20,
                height: 20,
                
              }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Contact" 
        component={Getprofile}
        options={{
          headerShown: false, // Hide the header for the Profile tab
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/Profile.png')} // Replace with another image for the Profile tab
              style={{
                width: 20,
                height: 20,
                
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>


  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator   
    screenOptions={{
      drawerType: 'front',
      swipeEdgeWidth: 100,
  }}
    
    
    >
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="flatList " component={MainClass} />
      <Drawer.Screen name="SectionList" component={SectionLists}/>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}





  
  {/* <Tab.Navigator initialRouteName="LoggedIn">
      <Tab.Screen name="LoggedIn" component={Login}
     
      o
/>

<Tab.Screen name="Home" component={MainClass}
      
      
      />
      <Tab.Screen name="Profile" component={SignIns}
      

      options={{ headerShown: false }}
      />
    
      </Tab.Navigator>
   */}
  



const AppNavigation= ()=>{
  return(
 < NavigationContainer>
 <MyStack/>
 
 </NavigationContainer>
 )
}

{/*const RootStack = createNativeStackNavigator({
    
    screens: {
      Welcome: Welcome,
      Login:Login,
      SignIns:SignIns,
      
      
    },
  });
  const Navigation = createStaticNavigation(RootStack); */}

  


  export default  AppNavigation;