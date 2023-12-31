import React from "react";

// ----------- Stack Navigation ------------ 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen, Home, LoginScreen, RegisterScreen, SearchScreen, SearchListScreen, SortAndFilter, BookingDetailsScreen, LocationsScreen, TodaysTripScreen, CompaniesScreen } from "../screens";
import EditInformationScreen from "../screens/EditInformationScreen";
import ReservationListScreen from "../screens/ReservationListScreen";
import ReservationScreen from "../screens/ReservationScreen";
import { apiManager } from '../api/APIs';
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import { urls } from "../Constants";
import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const MainStack = () => {

  const navigation = useNavigation();

  const [ tokenVerify, setTokenVerify ] = useState(false);

  useEffect(() => {
    async function TokenCheck() {
      const jwtToken = await AsyncStorage.getItem('jwtToken');
  
      if(jwtToken != null){
        const token = {
            token: jwtToken,
        };
        try {
          const response = await apiManager.postWithoutToken(token, urls.tokenApi);
          const tokenValid = response.data.tokenValid;
          if (tokenValid)
            setTokenVerify(true);
          else
            setTokenVerify(false);
        }
        catch (error) {
          console.log("Request error", error);
          return setTokenVerify(false);
        }
      }
      else{
        return setTokenVerify(false);
      }
    }
    TokenCheck();
  }, []);

  useEffect(() => {
    if (tokenVerify) {
      navigation.dispatch(StackActions.replace('TabScreen'));
    }
  }, [tokenVerify]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}
      initialRouteName= "LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="TabScreen" component={MainTabNavigation} />
      <Stack.Screen name="SearchListScreen" component={SearchListScreen} />
      <Stack.Screen name="SortAndFilter" component={SortAndFilter} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
      <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
      <Stack.Screen name="TodaysTripScreen" component={TodaysTripScreen} />
      <Stack.Screen name="CompaniesScreen" component={CompaniesScreen} />
      <Stack.Screen name="EditInformationScreen" component={EditInformationScreen} />
      <Stack.Screen name="ReservationListScreen" component={ReservationListScreen} />
      <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
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
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
    </Tab.Navigator>
  )
}

// ----------- Tab Navigation ------------ 