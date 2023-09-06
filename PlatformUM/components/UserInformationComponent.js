import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const UserInformationComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>User Information</Text>
                <TouchableOpacity onPress={() => console.log("Edit")}>
                    <View style={styles.editIconContainer}>
                        <Image
                            source={require("../assets/edit-icon.png")}
                            style={styles.editIcon}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/mail-icon.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.textContainer}>Email | email@example.com</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/password-icon.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.textContainer}>Password | ********</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/phone-icon.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.textContainer}>Telephone | +54 9 2604348538</Text>
            </View>
        </View>
    );
}

const styles = {
    container: {
        justifyContent: "space-between",
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
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
        marginBottom: 16,
        backgroundColor: '#E7E6E6',
        borderRadius: 20,
    },
    icon: {
        width: '80%',
        height: '80%',
        marginRight: 50,
        borderRadius: 75,
        marginLeft: 4,
        marginTop: 5,
    },
    editIcon: {
        width: '80%',
        height: '80%',
        marginRight: 50,
        borderRadius: 75,
        marginLeft: 4,
        marginTop: 5,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 75,
        backgroundColor: "#E7E6E6",
    },
    editIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 75,
        backgroundColor: "#E7E6E6",
        justifyContent: "right",
        alignItems: "right",
        marginRight: -10,
        marginTop: -10,
    },
    textContainer: {
        fontSize: 15,
        fontWeight: 'light',
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
    },
}

export default UserInformationComponent;