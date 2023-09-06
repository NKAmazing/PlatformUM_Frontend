import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ReturnButtonComponent = () => {
    return (
        <TouchableOpacity
            style={styles.returnButton}
            onPress={() => {
                // Here is the navigation to the previous screen
            }}
        >
            <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
    );
}

const styles = {
    returnButton: {
        width: 50,  // Width of the button
        height: 50, // Height of the button
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20, // Margin left of the button to align position
        backgroundColor: 'black',
        borderRadius: 30, // Border radius of the button
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
};


export default ReturnButtonComponent;