import { Text, Platform, View } from "react-native";
import { BookingDetails, LoadingView, Login, Profile, Register, SearchResults, SortFilterView, Settings, Home } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
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

export default function App() {
  return (
    <NavigationContainer>
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
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <SimpleLineIcons name="login" size={24} color="black" />
                  <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>HOME</Text>
                </View>
              )
          }
          }}
          />
          {/* <Tab.Screen 
            name="Login" 
            component={Login}
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
          component={SearchResults}
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
                  {/* <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>BUY A TICKET</Text> */}
                </View>
              )
          }
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}>
                  <AntDesign name="user" size={24} color="black" />
                  <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12, fontWeight: "bold"}}>PROFILE</Text>
                </View>
              )
          }
          }}
        />
        {/* <Tab.Screen 
          name="Register" 
          component={Register}
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
    </NavigationContainer>
    )
}