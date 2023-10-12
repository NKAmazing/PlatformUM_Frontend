import React from "react";
import { TextInput, View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import getUserInformation from "../functions/UsersRequests";
import onEditInformation from "../functions/EditInformation";


const EditInformationComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const navigation = useNavigation();

    const handleEdit = async (email, password, telephone) => {
        const userData = await getUserInformation();
        if (userData) {
            const userId = userData.id;
            state = await onEditInformation(userId, email, password, telephone);
            if (state == true) {
                navigation.navigate("ProfileScreen");
            }
            else if (state == false) {
                console.log("Edit failed");
            }
        } else {
            console.log("userData is null");
        }
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.container}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Edit Information</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Telephone"
                        value={telephone}
                        onChangeText={setTelephone}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Save" onPress={() => handleEdit(email, password, telephone)} />
                </View>
            </View>
        </View>
    )
}

const styles = {
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderColor: 'white',
        backgroundColor: '#F1EFEE',
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        width: '50%',
    },
}

export default EditInformationComponent;