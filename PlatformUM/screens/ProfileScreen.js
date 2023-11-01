import { View, Text } from 'react-native'
import React from 'react'
import ReservationListComponent from '../components/ReservationListComponent'
import AppBackgroundComponent from '../components/AppBackgroundComponent'
import UserInformationComponent from '../components/UserInformationComponent'
import ReturnButtonComponent from '../components/ReturnButtonComponent'
import AvatarComponent from '../components/AvatarComponent'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import getUserInformation from '../functions/UsersRequest'

const ProfileScreen = () => {
    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        // Fetch User Information
        async function fetchUserData() {
            const userData = await getUserInformation();
            if (userData) {
                setUserData(userData);
            }
        }
        fetchUserData();
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <AppBackgroundComponent />
                    <View style={styles.returnButton}>
                        <ReturnButtonComponent />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.avatarContainer}>
                            <AvatarComponent />
                        </View>
                        {userData && (
                        <View style={styles.usernameTitle}>
                            <Text style={styles.usernameText}>{capitalizeFirstLetter(userData.username)}</Text>
                        </View>
                        )}
                        <UserInformationComponent />
                        <ReservationListComponent />
                        <View style={styles.jumpRow}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
    },
    returnButton: {
        marginTop: 50,
        marginLeft: 5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        backgroundColor: 'white',
        borderRadius: 75,
        marginBottom: 15,
    },
    usernameTitle: {
        marginBottom: 20,
    },
    usernameText: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'white',
    },
    jumpRow: {
        marginBottom: '40%',
    },
}


export default ProfileScreen;