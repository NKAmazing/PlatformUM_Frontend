import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { Image } from "react-native";
import onLogout from "../functions/Logout";
import { screens, errorMessages, logos } from "../Constants";

const UserOptionsComponent = () => {
    // Set the data in a useState
    const [showButtons, setShowButtons] = useState(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    // Set navigation
    const navigation = useNavigation();
    
    const showConfirmationDialog = () => {
        setShowLogoutConfirmation(true);
    };

    const handleLogout = async () => {
        try {
            const logoutResult = await onLogout();
    
            if (logoutResult === true) {
                setShowLogoutConfirmation(false);
                navigation.navigate(screens.Login);
            }
        } catch (error) {
            console.error(errorMessages.logout, error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
                <View style={styles.fixedButton}>
                    <Image
                        source={logos.Avatar}
                        style={styles.avatarImage}
                    />
                </View>
            </TouchableOpacity>
            {showButtons && (
                <View style={styles.buttonList}>
                    <TouchableOpacity onPress={showConfirmationDialog}>
                        <View style={styles.row}>
                            <Image
                                source={logos.LogOutIcon}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showLogoutConfirmation}
            >
                <View style={styles.confirmationContainer}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.confirmationText}>
                            Are you sure you want to log out?
                        </Text>
                        <TouchableOpacity onPress={() => setShowLogoutConfirmation(false)}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogout}>
                            <Text style={styles.logoutButton}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = {
    container: {
        flexDirection: 'column',
        width: 50,
        height: 100,
        marginLeft: 5,
        justifyContent: 'space-between',
    },
    fixedButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#E7E6E6',
        height: '60',
    },
    textContainer: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    buttonList: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#E7E6E6',
        padding: 12,
        borderRadius: 100,
        width: '100',
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 75,
        backgroundColor: "#B9B8B8",
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 75,
    },
    confirmationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    confirmationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    cancelButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    logoutButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF0000",
    },
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        width: "80%",
        alignItems: "center",
    },
}

export default UserOptionsComponent;
