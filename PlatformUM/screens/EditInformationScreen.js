import React from "react";
import EditInformationComponent from "../components/EditInformationComponent";
import { View } from "react-native";
import AppBackgroundComponent from "../components/AppBackgroundComponent";
import ReturnButtonComponent from "../components/ReturnButtonComponent";

const EditInformationScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.returnButton}>
                <ReturnButtonComponent />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.contentContainer}>
                    <EditInformationComponent />
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
    },
    formContainer: {
        marginTop: 250,
        justifyContent: "center",
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    returnButton: {
        marginTop: 50,
        marginLeft: 5,
    },
}

export default EditInformationScreen;