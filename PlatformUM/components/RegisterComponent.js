import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import SwitchScreenComponent from "./SwitchScreenComponent";

const RegisterComponent = ({ onRegister }) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleRegister = () => {
        onRegister(email, username, password, repeatPassword, telephone);
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.row}>
                    <SwitchScreenComponent targetScreen="LoginScreen" buttonText={"Login"}/>
                    <View style={styles.separator}></View>
                    <SwitchScreenComponent targetScreen="RegisterScreen" buttonText={"Register"}/>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
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
                <TextInput
                    style={styles.input}
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    secureTextEntry={true}
                    onChangeText={setRepeatPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telephone"
                    value={telephone}
                    onChangeText={setTelephone}
                />
                <View style={styles.button}>
                    <Button title="Register" onPress={handleRegister} />
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
        height: '80%',
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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'black',
    },
    separator: {
        width: 2,
        height: 45,
        backgroundColor: 'black',
    },
});

export default RegisterComponent;
