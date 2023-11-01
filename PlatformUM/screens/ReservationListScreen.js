import React from "react";
import { View, Text } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import AllReservationsComponent from "../components/AllReservationsComponent";
import ReturnButtonComponent from "../components/ReturnButtonComponent";

const ReservationListScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.row}>
                <View style={styles.returnButton}>
                    <ReturnButtonComponent />    
                </View>
                <Text style={styles.title}>Reservations</Text>
            </View>
            <View style={styles.contentContainer}>
                <AllReservationsComponent />
            </View>
        </View>
);
}

const styles = {
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    returnButton: {
        marginTop: 50,
        marginLeft: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginTop: 50,
        fontWeight: '500',
        fontStyle: 'normal',
        marginLeft: 60,
        color: 'white',
    },
}

export default ReservationListScreen;