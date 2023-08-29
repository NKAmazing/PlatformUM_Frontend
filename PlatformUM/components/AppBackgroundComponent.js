import React from "react";
import { View, StyleSheet } from "react-native";

const AppBackgroundComponent = () => {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#16247d", 
        height: 350, width: "100%", 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: -1
    }
});

export default AppBackgroundComponent;