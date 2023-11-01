import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateTokenForAllViews } from "../api/APIs";
import { errorMessages, keywords } from "../Constants";

async function onLogout() {
    try {
        await AsyncStorage.removeItem(keywords.jwt);
        updateTokenForAllViews();
        return true;
    } catch (error) {
        console.log(errorMessages.request, error);
        return false;
    }
}

export default onLogout;