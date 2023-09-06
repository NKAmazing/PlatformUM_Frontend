import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Image } from "react-native";

const ReturnButtonComponent = () => {
    return (
        <TouchableOpacity
            style={styles.returnButton}
            onPress={() => {
                // Here is the navigation to the previous screen
            }}
        >
           <Image
                source={require('../assets/return-button-icon.png')}
                style={styles.icon}
            /> 
        </TouchableOpacity>
    );
}

const styles = {
    returnButton: {
        width: 50,  // Width of the button
        height: 50, // Height of the button
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5, // Margin left of the button to align position
        // backgroundColor: 'black',
        borderRadius: 30, // Border radius of the button
    },
    // buttonText: {
    //     fontSize: 16,
    //     color: 'white',
    // },
    icon: {
        width: 30, // Width of the icon
        height: 30, // Height of the icon
    },
};


export default ReturnButtonComponent;