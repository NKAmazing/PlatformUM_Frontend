import React from "react";
import { View, StyleSheet } from "react-native";
import LoginComponent from "../components/LoginComponent";
import AppBackgroundComponent from "../components/AppBackgroundComponent";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.contentContainer}>
                <LoginComponent onLogin={logIn}/>
            </View>
        </View>
    );
};

const logIn = (username, password) => {
    
    if (username === "username" && password === "password") {
      console.log("Login successful");
    } else {
      console.log("Login error");
    }
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;