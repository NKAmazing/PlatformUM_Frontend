import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerApi, updateTokenForAllViews } from '../api/APIs';

async function onRegister(email, username, password, telephone) {
    try {
        const registerData = {
            email: email,
            username: username,
            password: password,
            telephone: telephone,
        };
        await AsyncStorage.removeItem('jwtToken');
        const response = await registerApi.post(registerData);
        // Save token to AsyncStorage
        const token = response.data.token;
        await AsyncStorage.setItem('jwtToken', token);
        updateTokenForAllViews();
    
        return true;
    } catch (error) {
        console.log("Request error: ", error);
        return false;
    }
}

export default onRegister;
