import React from "react";
import { ScrollView, SafeAreaView, View } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import AllReservationsComponent from "../components/AllReservationsComponent";
import ReturnButtonComponent from "../components/ReturnButtonComponent";

const ReservationListScreen = () => {
    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.returnButton}>
                <ReturnButtonComponent />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.contentContainer}>
                    <AllReservationsComponent />
                </View>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
    },
    formContainer: {
        marginTop: 350,
        justifyContent: "center",
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    returnButton: {
        marginTop: 50,
        marginLeft: 5,
    },
}

export default ReservationListScreen;