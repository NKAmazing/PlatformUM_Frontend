import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiManager, updateTokenForAllViews } from '../api/APIs';
import { urls } from '../Constants';
import { errorMessages, keywords } from '../Constants';

async function onRegister(email, username, password, telephone) {
    try {
        const registerData = {
            email: email,
            username: username,
            password: password,
            telephone: telephone,
        };
        await AsyncStorage.removeItem(keywords.jwt);
        const response = await apiManager.postWithoutToken(registerData, urls.registerApi);
        // Save token to AsyncStorage
        const token = response.data.token;
        await AsyncStorage.setItem(keywords.jwt, token);
        updateTokenForAllViews();
    
        return true;
    } catch (error) {
        console.log(errorMessages.request, error);
        return false;
    }
}

export default onRegister;
