import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import getUserInformation from "../functions/UsersRequest";
import { logos, titles } from "../Constants";
import { screens } from "../Constants";

const AllReservationsComponent = () => {
    // Set the data in a useState
    const [reservationList, setReservationList] = useState([]);
    // Set navigation
    const navigation = useNavigation();
    
    useEffect(() => {
        // Fetch Reservation List
        async function fetchReservationList() {
            const userData = await getUserInformation();
            if (userData) {
                const reservationList = userData.reservations;
                if (reservationList) {
                    reservationList.reverse();
                    setReservationList(reservationList);
                }
            }
        }
        fetchReservationList();
    }, []);
    
    return (
        <View style={styles.reservationListContainer}>
            {reservationList.map((reservation) => (
                <TouchableOpacity key={reservation.id} onPress={() => navigation.navigate(screens.Reservation, { reservationId: reservation.id })}>
                    <View key={reservation.id} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={logos.Reservation}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textContainer}>
                            {`${titles.Reservation} ${reservation.id} – ${reservation.status}`}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = {
    reservationListContainer: {
        justifyContent: "top",
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        height: '90%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
        marginBottom: 16,
        backgroundColor: '#E7E6E6',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
    },
    icon: {
        width: '90%',
        height: '85%',
        marginRight: 50,
        borderRadius: 75,
        marginLeft: 5,
        marginTop: 4,
        backgroundColor: "white",
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 75,
        backgroundColor: "#E7E6E6",
    },
    textContainer: {
        fontSize: 15,
        fontWeight: 'light',
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
    },
}

export default AllReservationsComponent;