import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ReturnButtonComponent from '../components/ReturnButtonComponent';
import { SearchTravels } from '../components/SearchTravels';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchTripsByDate } from '../functions/TodaysTripsRequest';


const MainText = () => {
  return (
    <View style={styles.mainTextContainer}>
      <Text style={styles.mainText}>
      These are today's trips!
      </Text>
      <Text style={styles.subText}>
        Explore and book your exciting journeys.
      </Text>
    </View>
  );
};

const TodaysTripScreen = () => {
    const [trip, setTrip] = React.useState([]);

    useEffect(() => {
        fetchTripsByDate()
            .then((data) => {
                setTrip(data);
            });
    }, []);

    return (
        <SafeAreaView style={{flex:1}}>
            <AppBackgroundComponent />
            <View style={styles.container}>
                <View style={styles.returnButton}>
                    <ReturnButtonComponent />
                </View>
                <MainText />
            <ScrollView>
                { trip.length === 0 && <Text style={styles.errorText}>No trips today :( </Text>}
                {trip.map((trip, index) => (
                <SearchTravels
                    key={index}
                    trip={trip}
                />
                ))}
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    returnButton: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
    },
    listContainer: {
        marginTop: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
    },
    mainTextContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',

    },
    subText: {
        fontSize: 16,
        color: 'gray',
    },
    errorText: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        
    },
});

export default TodaysTripScreen;
