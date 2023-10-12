import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import SwitchScreenComponent from "./SwitchScreenComponent";
import onLogin from "../functions/Login";
import { Image } from "react-native";


const LoginComponent = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (username, password) => {
        state = await onLogin(username, password);
        if (state == true) {
            navigation.navigate("TabScreen");
        }
        else if (state == false) {
            console.log("Login failed");
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <Image style={styles.imgComponent} source={require('../assets/images/logo.png')} />
                <Text style={styles.title}>Welcome Back!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <View style={styles.button}>
                    <Button title="Sign In" 
                            onPress={() => handleLogin(username, password)} />
                </View>
                <View style={styles.switchContainer}>
                    <Text>Don't have an account? </Text>
                    <SwitchScreenComponent targetScreen="RegisterScreen" buttonText={"Register"}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    input: {
        width: '90%',
        padding: 10,
        marginBottom: 10,
        borderColor: 'white',
        backgroundColor: '#F1EFEE',
        borderWidth: 1,
        borderRadius: 10,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        width: '50%',
    },
    imgComponent: {
        width: 100,
        height: 100,
        marginBottom: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
});

export default LoginComponent;