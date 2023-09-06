import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SwitchScreenComponent = ({ targetScreen, buttonText }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.switchButton}
            onPress={() => navigation.navigate(targetScreen)}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    switchButton: {
        width: 100,  // Width of the button
        height: 40, // Height of the button
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2, // Margin left of the button to align position
        backgroundColor: 'white',
        borderRadius: 30, // Border radius of the button
        // borderWidth: 2,
        // bordercolor: 'black',
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
};

export default SwitchScreenComponent;