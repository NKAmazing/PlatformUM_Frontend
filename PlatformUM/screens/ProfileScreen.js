import { View, Text } from 'react-native'
import React from 'react'
import ReservationListComponent from '../components/ReservationListComponent'
import AppBackgroundComponent from '../components/AppBackgroundComponent'
import UserInformationComponent from '../components/UserInformationComponent'
import ReturnButtonComponent from '../components/ReturnButtonComponent'
import AvatarComponent from '../components/AvatarComponent'
import { ScrollView } from 'react-native'

const ProfileScreen = () => {
    return (
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
                    <View style={styles.usernameTitle}>
                        <Text style={styles.usernameText}>Username</Text>
                    </View>
                    <UserInformationComponent />
                    <ReservationListComponent />
                </View>
            </View>
        </ScrollView>
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
        marginBottom: 20,
    },
    usernameTitle: {
        marginBottom: 20,  
    },
    usernameText: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'white',
    },
}


export default ProfileScreen;