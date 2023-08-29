import React from "react";
import { View, StyleSheet } from "react-native";
import RegisterComponent from "../components/RegisterComponent";
import AppBackgroundComponent from "../components/AppBackgroundComponent";

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.contentContainer}>
                <RegisterComponent onRegister={register}/>
            </View>
        </View>
    );
};

const register = (email, username, password, repeatPassword, telephone) => {
    if (email === "" || username === "" || password === "" || repeatPassword === "" || telephone === "") {
      console.log("Register Error");
    } else {
        console.log("Registro Successful");
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

export default RegisterScreen;