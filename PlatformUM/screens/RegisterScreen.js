import React from "react";
import { View, StyleSheet } from "react-native";
import RegisterComponent from "../components/RegisterComponent";
import AppBackgroundComponent from "../components/AppBackgroundComponent";

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.contentContainer}>
                <RegisterComponent />
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

export default RegisterScreen;