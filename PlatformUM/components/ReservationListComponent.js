import React from "react";
import { View, Button, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const ReservationListComponent = ({ reservationList, setReservationList }) => {
    return (
        <View style={styles.reservationListContainer}>
            <View style={styles.firstRow}>
                <Text>Reservation List</Text>   
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Edit")}
                
                >
                    <Text style={styles.buttonText}>See All</Text>
                </TouchableOpacity>
            </View>
            <Text>Reservation 1</Text>
            <Text>Reservation 2</Text>
            <Text>Reservation 3</Text>
        </View>
    );
    }

const styles = {
    reservationListContainer: {
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '70%',
        height: '30%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    button: {
        width: 65,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: 'black',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
};

export default ReservationListComponent;