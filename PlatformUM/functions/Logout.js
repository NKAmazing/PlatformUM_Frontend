import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManager, updateTokenForAllViews } from "../api/APIs";

async function onLogout() {
    try {
        await AsyncStorage.removeItem('jwtToken');
        updateTokenForAllViews();
        return true;
    } catch (error) {
        console.log("Request error: ", error);
        return false;
    }
}

export default onLogout;