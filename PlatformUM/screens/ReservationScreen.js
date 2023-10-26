import React from "react";
import AppBackgroundComponent from "../components/AppBackgroundComponent";
import { Text, View } from "react-native";
import ReturnButtonComponent from "../components/ReturnButtonComponent";
import { ScrollView, SafeAreaView } from "react-native";
import ReservationInformationComponent from "../components/ReservationInformationComponent";


const ReservationScreen = ({ route }) => {

    // Get the ID of the reservation
    const parameters = route.params;

    if (parameters) {
        reservationId = parameters.reservationId
        console.log("Reservation ID: ", reservationId);
    }

    return (
        <View style={styles.container}>
            <AppBackgroundComponent />
            <View style={styles.buttonContainer}>
                <ReturnButtonComponent />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.contentContainer}>
                    <ReservationInformationComponent reservationId={reservationId}/>
                </View>
            </View>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 50,
        marginLeft: 5,
    },
    formContainer: {
        marginTop: 250,
        justifyContent: "center",
        alignItems: 'center',
    },
    contentContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
}

export default ReservationScreen;