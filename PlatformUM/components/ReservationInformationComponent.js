import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import getReservationInformation from "../functions/ReservationRequests";
import { categoriesData } from "../Constants";
import moment from "moment";
import capitalizeFirstLetter from "../functions/CapitalizeString";
import { formats } from "../Constants";

const ReservationInformationComponent = ({ reservationId }) => {
  // Set the data in a useState
  const [ reservationData, setReservationData ] = useState(null);
  const [ formattedDate, setFormattedDate ] = useState(null);
  const [ arrivalTime, setArrivalTime ] = useState(null);
  // Set navigation
  const navigation = useNavigation();

  useEffect(() => {
      // Fetch User Information
      async function fetchReservationData() {
          const reservationData = await getReservationInformation(reservationId);
          if (reservationData) {
            // Set reservation data
            setReservationData(reservationData);

            // Format date to DD/MM/YY HH:mm
            const formattedDate = moment(reservationData.trip.destination.date).format(formats.dateTime);
            setFormattedDate(formattedDate);

            // Calculate arrival time
            const departureTime = moment(reservationData.trip.destination.date, formats.dateTimeWithSeconds);
            const arrivalTime = departureTime.add(reservationData.trip.destination.travelDuration, 'hours').format(formats.dateTime);
            setArrivalTime(arrivalTime);
          }
      }
      fetchReservationData();
  }, []);

  let travelDurationHours = 0;
  let travelDurationMinutes = 0;

  if (reservationData) {
    // Format hour
    travelDurationHours = Math.floor(reservationData.trip.destination.travelDuration);
    travelDurationMinutes = ((reservationData.trip.destination.travelDuration - travelDurationHours) * 60).toFixed(0);
  }

  const formattedDuration = `${travelDurationHours}:${travelDurationMinutes}hs`;

  return (
    <View style={styles.container}>
        {reservationData && (
            <View style={styles.cardContainer}>
                <View style={styles.companyContainer}>
                  <Image source={categoriesData.find((item) => item.title === 'Companies').image} style={styles.companyImage} />
                  <Text style={styles.companyName}>{capitalizeFirstLetter(reservationData.trip.company.name)}</Text>
                </View><Text style={styles.price}>$ {reservationData.price}</Text><View style={styles.infoContainer}>
                        <Text style={styles.info}>Origin: {reservationData.trip.destination.origin.name}</Text>
                        <Text style={styles.info}>Destination: {reservationData.trip.destination.destination.name}</Text>
                        <Text style={styles.info}>Departure Time: {formattedDate}</Text>
                        <Text style={styles.info}>Duration: {formattedDuration}</Text>
                        <Text style={styles.info}>Arrival Time: {arrivalTime}</Text>
                        <Text style={styles.info}>Status: {reservationData.status}</Text>
                        <Text style={styles.info}> Passengers: {reservationData.passengers.map((passenger, index) => (
                        <Text key={index}>  {'\n'}
                        {passenger.fullname} - N° Seat: {passenger.seatNumber}</Text>
                      ))}</Text>
                    </View>
            </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      padding: 5,
      justifyContent: 'center',
      alignContent: 'center',
    },
    cardContainer: {
      backgroundColor: '#D8D6D3',
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
      fontSize: 28,
      color: 'black',
      fontWeight: 'bold',
      flex: 1,
      marginLeft: 10,
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
