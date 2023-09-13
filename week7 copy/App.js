import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // v.6 
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons, FontAwesome5, FontAwesome,AntDesign } from '@expo/vector-icons';
import Tab01 from './examples/Tab1';
import Example01 from './examples/Example01 copy';//fadeIn
import Example02 from './examples/Example02 copy';//spin
import Example03 from './examples/Example03 copy';
import Example04 from './examples/Example04 copy';//spring

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <Tab01/>
    <Example03/>

    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName="T1"
    //   screenOptions={{
    //     headerShown: false,
    //     drawerActiveTintColor: "orange",
    //     drawerInactiveTintColor: "gray",
    //   }}>
    //     <Tab.Screen
    //       name="Spring"
    //       component={Tab01}
    //       options={{
    //         tabBarIcon: ({ color, size }) => {
    //           return <FontAwesome5 name="heart" size={size} color={color} />
    //         }
    //       }} />
    //     <Tab.Screen
    //       name="Sequence"
    //       component={Tab02}
    //       options={{
    //         tabBarIcon: ({ color, size }) => {
    //           return <FontAwesome5 name="eye" size={size} color={color} />
    //         }
    //       }} />
    //     <Tab.Screen
    //       name="Parallel"
    //       component={Tab03}
    //       options={{
    //         tabBarIcon: ({ color, size }) => {
    //           return <AntDesign name="frowno" size={24} color="black" />
    //         }
    //       }} />
    //   </Tab.Navigator>
    // </NavigationContainer>

  );
}

