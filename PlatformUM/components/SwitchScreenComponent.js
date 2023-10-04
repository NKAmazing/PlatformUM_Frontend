import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SwitchScreenComponent = ({ targetScreen, buttonText }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(targetScreen)}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonText: {
        fontSize: 15,
        color: 'blue',
    },
};

export default SwitchScreenComponent;