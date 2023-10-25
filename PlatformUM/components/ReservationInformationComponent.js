import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import getReservationInformation from "../functions/ReservationRequests";

const ReservationInformationComponent = ({ reservationId }) => {
    // Set the data in a useState
    const [ reservationData, setReservationData ] = useState(null);
    // Set navigation
    const navigation = useNavigation();

    useEffect(() => {
        // Fetch User Information
        async function fetchReservationData() {
            const reservationData = await getReservationInformation(reservationId);
            if (reservationData) {
                setReservationData(reservationData);
            }
        }
        fetchReservationData();
    }, []);

    let travelDurationHours = 0;
    let travelDurationMinutes = 0;
    if (reservationData) {
        console.log("Reservation Data: ", reservationData)
        // Format hour
        travelDurationHours = Math.floor(reservationData.trip.destination.travelDuration);
        travelDurationMinutes = (reservationData.trip.destination.travelDuration - travelDurationHours) * 60;
    }

    const formattedDuration = `${travelDurationHours}:${travelDurationMinutes}hs`;

    return (
            <View style={styles.container}>
                {reservationData && (
                    <View style={styles.cardContainer}>
                        <View style={styles.companyContainer}>
                            <Text style={styles.companyName}>{reservationData.trip.company.name}</Text>
                        </View><Text style={styles.price}>$ {reservationData.trip.price}</Text><View style={styles.infoContainer}>
                                <Text style={styles.info}>Origin: {reservationData.trip.destination.origin.name}</Text>
                                <Text style={styles.info}>Destination: {reservationData.trip.destination.destination.name}</Text>
                                {/* <Text style={styles.info}>Departure Time: {formattedDate}</Text> */}
                                <Text style={styles.info}>Duration: {formattedDuration}</Text>
                                {/* <Text style={styles.info}>Arrival: {arrivalTime}</Text> */}
                            </View>
                    </View>
                )}
            </View>
    )
}

const styles = StyleSheet.create({
    alignItemsCenter:{
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      padding: 5,
    },
    titleContainer: {
      marginTop: 35,
      marginBottom: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 35,
      color: 'white',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginBottom: 20,
    },

    travelTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginEnd: 15,
    },
    travelTitle: {
      fontSize: 20,
      color: 'black',
    },
    travelContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    travelContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    travelContent: {
      fontSize: 15,
      color: 'black',
    },
    travelContentLittle: {
      fontSize: 10,
      color: 'black',
    },

    filterTitleContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    filterTitle: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    filterContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    filterContentContainerCenter: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    checkBox: { 
      marginTop: 10,
    },
    filterContent: {
      fontSize: 15,
      color: 'black',
      marginHorizontal: 10,
      marginTop: 10,
    },
    filterButtonColor: {
      color: 'white',
      backgroundColor: '#2396f3',
      borderRadius: 5,
      padding: 5,
    },

    filterSelectAll: {
      fontSize: 15,
      color: '#2396f3',
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    container: {
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      padding: 5
    },
    cardContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginVertical: 10,
      alignItems: 'center',
    },
    companyContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    companyImage: {
      width: 90,
      height: 60,
      borderRadius: 15,
      marginEnd: 10,
    },
    companyName: {
      fontSize: 25,
      color: 'black',
      flex: 1,
    },
    price: {
      marginTop: 10,
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    infoContainer: {
      marginVertical: 10,      
    },
    info: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
});

export default ReservationInformationComponent;
