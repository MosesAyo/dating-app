import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/Screens/Home";

import HomeIcon from './assets/svg/Home-Icon.svg';
import HomeActive from './assets/svg/Home-Active.svg';
import ChatsIcon from './assets/svg/Chats-Icon.svg';
import ChatsActive from './assets/svg/Chats-Active.svg';
import HeartIcon from './assets/svg/Heart-Icon.svg';
import HeartActive from './assets/svg/Heart-Active.svg';
import SearchIcon from './assets/svg/Search-Icon.svg';
import SearchActive from './assets/svg/Search-Active.svg';

// const  = Icons;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible:false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 15,
          // paddingHorizontal: 16,
          height: 70,
          shadowColor: "#8D7A8F15",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 0,
          elevation: 20,
        },
        
      })}
      initialRouteName="Homescreen"
    >
      <Tab.Screen
        name="Homescreen"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused }) => 
            focused ? <Text style={{color: "#000000", fontSize: 10 }}>Home</Text>: <Text style={{color: "#BABABA", fontSize: 10 }}>Home</Text>
          ,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <HomeActive /> : <HomeIcon />,
        }}
      />

      <Tab.Screen
        name="Likescreen"
        component={()=>{return <Text></Text>}}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused }) => 
          focused ? <Text style={{color: "#000000", fontSize: 10 }}>Like</Text>: <Text style={{color: "#BABABA", fontSize: 10 }}>Like</Text>
        ,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <HeartActive /> : <HeartIcon />,
        }}
      />

      <Tab.Screen
        name="Searchscreen"
        component={()=>{return <Text>Search</Text>}}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused }) => 
          focused ? <Text style={{color: "#000000", fontSize: 10 }}>Search</Text>: <Text style={{color: "#BABABA", fontSize: 10 }}>Search</Text>
        ,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <SearchActive /> : <SearchIcon />,
        }}
      />

      <Tab.Screen
        name="Chatscreen"
        component={()=>{return <Text>Chats</Text>}}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({ focused }) => 
          focused ? <Text style={{color: "#000000", fontSize: 10 }}>Chats</Text>: <Text style={{color: "#BABABA", fontSize: 10 }}>Chats</Text>
        ,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? <ChatsActive /> : <ChatsIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={TabNavigator} />
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default RootNavigator;
