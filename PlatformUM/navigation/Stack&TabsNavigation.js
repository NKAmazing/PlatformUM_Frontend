import React from "react";

// ----------- Stack Navigation ------------ 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Home, LoginScreen, RegisterScreen, SearchScreen, SearchListScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}
            initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="TabScreen" component={MainTabNavigation} />
            <Stack.Screen name="SearchListScreen" component={SearchListScreen} />
        </Stack.Navigator>
    )
}

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    )
}

export const SearchResultsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SearchResultsScreen" component={SearchScreen} />
        </Stack.Navigator>
    )
}

export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ProfileScreen" component={Profile} />
        </Stack.Navigator>
    )
}

// ----------- Stack Navigation ------------ 

// ----------- Tab Navigation ------------ 

import { View, Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const MainTabNavigation = () => {
    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 60,
          backgroundColor: "#ffff",
        }
      }

    return (
        <Tab.Navigator screenOptions={screenOptions}>
        {/* <Tab.Screen 
          name="LoadingView" 
          component={LoadingView} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                
              </View>
            )
          }}
        /> */}
        {/* <Tab.Screen 
          name="BookingDetails" 
          component={BookingDetails} 
        /> */}
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <SimpleLineIcons name="login" size={24} color="black" />
                  <Text style={{color: focused ? "#16247d" : "#748c94", fontSize: 12, fontWeight: "bold"}}>HOME</Text>
                </View>
              )
          }
          }}
          />
          {/* <Tab.Screen
            name="Login" 
            component={LoginScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{alignItems: "center", justifyContent: "center"}}>
                    <SimpleLineIcons name="login" size={24} color="black" />
                    <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>LOGIN</Text>
                  </View>
                )
            }
            }}
          /> */}
         <Tab.Screen 
          name="SearchResults" 
          component={SearchResultsStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View 
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    top: Platform.OS === "ios" ? -10 : -20,
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    borderRadius: Platform.OS === "ios" ? 25 : 30,
                  }}
                >
                  <Entypo name="ticket" size={24} color="white" />
                  {/* <Text style={{color: focused ? "#16247d" : "#748c94", fontSize: 12, fontWeight: "bold"}}>BUY A TICKET</Text> */}
                </View>
              )
          }
          }}
        /> 
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <AntDesign name="user" size={24} color="black" />
                  <Text style={{color: focused ? "#16247d" : "#748c94", fontSize: 12, fontWeight: "bold"}}>PROFILE</Text>
                </View>
              )
          }
          }}
        />
        {/*<Tab.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <SimpleLineIcons name="login" size={24} color="black" />
                  <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>REGISTER</Text>
                </View>
              )
          }
          }} 
        />*/}
        {/* <Tab.Screen 
          name="SortFilterView" 
          component={SortFilterView}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <SimpleLineIcons name="login" size={24} color="black" />
                  <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>LOGIN</Text>
                </View>
              )
          }
          }}
        /> */}
        {/* <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Ionicons name="ios-settings-outline" size={24} color="black" />
                  <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>SETTINGS</Text>
                </View>
              )
          }
          }}
        /> */}
      </Tab.Navigator>
    )
}

// ----------- Tab Navigation ------------ 