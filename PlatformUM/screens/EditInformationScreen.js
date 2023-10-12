import React from "react";
import EditInformationComponent from "../components/EditInformationComponent";
import { View } from "react-native";

const EditInformationScreen = () => {
    return (
        <View style={styles.container}>
            <EditInformationComponent />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
}

export default EditInformationScreen;