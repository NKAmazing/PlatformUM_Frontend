import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import SwitchScreenComponent from "./SwitchScreenComponent";
import { Image } from "react-native";
import onRegister from "../functions/Register";
import onCheckUsername from "../functions/CheckUsername";
import Modal from "react-native-modal";

const RegisterComponent = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleRegister = async (email, username, password, repeatPassword, telephone) => {
        const usernameExists = await onCheckUsername(username);
        if (usernameExists == true) {
            console.log("Username already exists");
            setErrorMessage("Username already exists");
            toggleModal();
        }
        else if (password != repeatPassword) {
            console.log("Password and Repeat Password are not the same");
            setErrorMessage("Password and Repeat Password are not the same");
            toggleModal();
        }
        else {
            state = await onRegister(email, username, password, telephone);
            if (state == true) {
                navigation.navigate("LoginScreen");
            }
            else if (state == false) {
                console.log("Register failed");
                setErrorMessage("Register failed");
                toggleModal();
            }
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <Image style={styles.imgComponent} source={require('../assets/images/logo.png')} />
                <Text style={styles.title}>Register your account</Text>
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
                    <Button title="Sign Up" onPress={() => handleRegister(email, username, password, repeatPassword, telephone)} />
                </View>
                <View style={styles.switchContainer}>
                    <Text>Already have an account? </Text>
                    <SwitchScreenComponent style={styles.switchButton} targetScreen="LoginScreen" buttonText={"Login"}/>
                </View>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <Button title="Close" onPress={toggleModal} />
                </View>
            </Modal>
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
        fontSize: 25,
        marginBottom: 20,
        fontWeight: '500',
        fontStyle: 'normal',
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderColor: 'white',
        backgroundColor: '#F1EFEE',
        borderWidth: 1,
        borderRadius: 5,
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
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        width: '50%',
    },
    switchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgComponent: {
        width: 100,
        height: 100,
        marginBottom: 1,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default RegisterComponent;
