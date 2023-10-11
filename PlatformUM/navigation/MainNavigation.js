import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./Stack&TabsNavigation"

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}

export default MainNavigation;