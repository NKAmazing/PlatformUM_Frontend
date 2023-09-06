import React from "react";
import { Image, View, Stylesheet } from "react-native";

const AvatarComponent = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/avatar.png")}
                style={styles.avatarImage}
            />
        </View>
    );
}

const styles = {
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "#B9B8B8",
    },
}

export default AvatarComponent;