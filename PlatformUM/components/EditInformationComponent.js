import React from "react";
import { TextInput, View } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";
import { useState } from "react";


const EditInformationComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    return (
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
                <Button title="Save" onPress={() => console.log("Save")} />
            </View>
        </View>
    )
}

const styles = {
    container: {
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        height: '40%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
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