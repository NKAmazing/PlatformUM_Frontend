import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const LoginComponent = ({ onLogin }) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        onLogin(username, password);
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
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
                    <Button title="Register" onPress={() => navigation.navigate("RegisterScreen")}/>
                </View>
                <View style={styles.button}>
                    <Button title="Login" onPress={() => navigation.navigate("TabScreen")}/>
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
      fontSize: 50,
      marginBottom: 50,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderColor: 'black',
        backgroundColor: '#F1EFEE',
        borderWidth: 1,
        borderRadius: 5,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        height: '60%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        marginTop: 20,
    }
});

export default LoginComponent;