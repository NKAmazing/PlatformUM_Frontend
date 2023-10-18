import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import getReservationList from "../functions/ReservationRequests";
import getUserInformation from "../functions/UsersRequests";

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
                const userId = userData.id;
                const reservationList = await getReservationList(userId);
                if (reservationList) {
                    setReservationList(reservationList);
                }
            }
        }
        fetchReservationList();
    }, []);
    
    return (
        <View style={styles.reservationListContainer}>
            {reservationList.map((reservation) => (
                <View style={styles.row} key={reservation.id}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../assets/bus-icon.png")}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textContainer}>
                        {`Reservation ${reservation.id} – ${reservation.status}`}
                    </Text>
                </View>
            ))}
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
        width: '100%',
        height: '1300%',
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
        height: '20%',
    },
    icon: {
        width: '100%',
        height: '100%',
        marginRight: 50,
        borderRadius: 75,
        marginLeft: 5,
        marginTop: 1,
        backgroundColor: "white",
    },
    iconContainer: {
        width: 50,
        height: 50,
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