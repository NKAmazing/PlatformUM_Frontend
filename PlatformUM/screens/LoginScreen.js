import React from "react";
import { View, StyleSheet } from "react-native";
import LoginComponent from "../components/LoginComponent";
import AppBackgroundComponent from "../components/AppBackgroundComponent";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.contentContainer}>
                <LoginComponent />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
});

export default LoginScreen;