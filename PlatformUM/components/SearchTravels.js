import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView, Platform, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { categoriesData } from '../Constants';
import { useNavigation } from "@react-navigation/core";
import { DatePicker } from './DateSelector';
import moment from 'moment';


export const SearchTitle = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Search Results</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Back"
          onPress={() => navigation.navigate("TabScreen")}
        />
        <Button 
          title="Config"
          onPress={() => navigation.navigate("SortAndFilter", route)}
        />
      </View>
    </View>
  );
};

export const SearchTravels = ({ trip, disabled = false }) => {
  const navigation = useNavigation();

  // Format date to DD/MM/YY HH:mm
  const formattedDate = moment(trip.destination.date).format('DD/MM/YY HH:mm');

  // Calculate arrival time
  const departureTime = moment(trip.destination.date, 'YYYY-MM-DDTHH:mm:ss');
  const arrivalTime = departureTime.add(trip.destination.travelDuration, 'hours').format('DD/MM/YY HH:mm');

  // Format hour
  const travelDurationHours = Math.floor(trip.destination.travelDuration);
  const travelDurationMinutes = (trip.destination.travelDuration - travelDurationHours) * 60;

  const formattedDuration = `${travelDurationHours}:${travelDurationMinutes}hs`;

  return (
    <View style={styles.container}>
    <Pressable
      style={styles.cardContainer}
      disabled={disabled}
      onPress={() => navigation.navigate('BookingDetails')}
    >
      <View style={styles.companyContainer}>
        <Image source={categoriesData.find((item) => item.title === 'Companies').image} style={styles.companyImage} />
        <Text style={styles.companyName}>{trip.company.name}</Text>
      </View>
      <Text style={styles.price}>$ {trip.price}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Origin: {trip.destination.origin.name}</Text>
        <Text style={styles.info}>Destination: {trip.destination.destination.name}</Text>
        <Text style={styles.info}>Departure Time: {formattedDate}</Text>
        <Text style={styles.info}>Duration: {formattedDuration}</Text>
        <Text style={styles.info}>Arrival: {arrivalTime}</Text>
      </View>
    </Pressable>
  </View>
  );
};

export const FilterView = ({ route }) => {
  //Trip and navigation
  const [trip, setTrip] = useState(route.params);
  const navigation = useNavigation();

  // Sort By functions
  const [isDefaultChecked, setDefaultChecked] = useState(true);
  const [isLowestPriceChecked, setLowestPriceChecked] = useState(false);
  const [isHighestPriceChecked, setHighestPriceChecked] = useState(false);
  const [isShortestDurationChecked, setShortestDurationChecked] = useState(false);
  const [isLongestDurationChecked, setLongestDurationChecked] = useState(false);

  function onChangeDefault() {
    setDefaultChecked(true);
    setLowestPriceChecked(false);
    setHighestPriceChecked(false);
    setShortestDurationChecked(false);
    setLongestDurationChecked(false);
  }

  function onChangeLowestPrice() {
    setDefaultChecked(false);
    isLowestPriceChecked ? setLowestPriceChecked(false) : setLowestPriceChecked(true);
    setHighestPriceChecked(false);
  }

  function onChangeHighestPrice() {
    setDefaultChecked(false);
    setLowestPriceChecked(false);
    isHighestPriceChecked ? setHighestPriceChecked(false) : setHighestPriceChecked(true);
  }

  function onChangeShortestDuration() {
    setDefaultChecked(false);
    isShortestDurationChecked ? setShortestDurationChecked(false) : setShortestDurationChecked(true);
    setLongestDurationChecked(false);
  }

  function onChangeLongestDuration() {
    setDefaultChecked(false);
    setShortestDurationChecked(false);
    isLongestDurationChecked ? setLongestDurationChecked(false) : setLongestDurationChecked(true);
  }

  // Departing Time functions
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('Empty');
  const [show, setShow] = useState(false);
  const [firstTime, setFirstTime] = useState('00:01');
  const [secondTime, setSecondTime] = useState('23:59');

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow (Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);

    var fTime = '';
    if (tempDate.getHours() < 10)
      fTime = '0' + tempDate.getHours();
    else
      fTime = tempDate.getHours();

    fTime = fTime + ':';

    if (tempDate.getMinutes() < 10)
      fTime = fTime + '0' + tempDate.getMinutes();
    else
      fTime = fTime + tempDate.getMinutes();

    if (time === 'firstTime') 
      setFirstTime(fTime)
    else if (time === 'secondTime') 
      setSecondTime(fTime)
    else
      console.log('Error: time is not defined')
  };

  const showMode = (time) => {
    setShow(true);
    setTime(time)
  };

  // Ticket Price functions
  const [firstPrice, setFirstPrice] = useState('');
  const [secondPrice, setSecondPrice] = useState('');

  const onChangeTicket = (newValue, price) => {
    if (price == "firstPrice")
      setFirstPrice(newValue);
    else if (price == "secondPrice")
      setSecondPrice(newValue);
    else
      console.log("Error: price is not defined")
  };

  // Bus Company functions
  const [isIselin, setIselin] = useState(false);
  const [isRapidoArgentino, setRapidoArgentino] = useState(false);
  const [isAndesmar, setAndesmar] = useState(false);
  const [isChevallier, setChevallier] = useState(false);
  const [isFlechaBus, setFlechaBus] = useState(false);
  const [isAll, setAll] = useState(false);

  function onPress() {
    if (!isAll) {
      setIselin(true);
      setRapidoArgentino(true);
      setAndesmar(true);
      setChevallier(true);
      setFlechaBus(true);
      setAll(true);
    }
    else {	
      setIselin(false);
      setRapidoArgentino(false);
      setAndesmar(false);
      setChevallier(false);
      setFlechaBus(false);
      setAll(false);
    }
  }

  return (
    <View>
      {/* Filter Title View */}
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sort & Filter</Text>
        </View>

      {/* Filter Content View */}
        {/* Sort By View */}
        <View style={styles.alignItemsCenter}>
          <View style={styles.travelContainer}>
            <View style={styles.filterTitleContentContainer}>
              <Text style={styles.filterTitle}>Sort By</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isDefaultChecked}
                    onValueChange={onChangeDefault}
                    color={isDefaultChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Default</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isLowestPriceChecked}
                    onValueChange={onChangeLowestPrice}
                    color={isLowestPriceChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Lowest Price</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isHighestPriceChecked}
                    onValueChange={onChangeHighestPrice}
                    color={isHighestPriceChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Highest Price</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isShortestDurationChecked}
                    onValueChange={onChangeShortestDuration}
                    color={isShortestDurationChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Shortest Duration</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isLongestDurationChecked}
                    onValueChange={onChangeLongestDuration}
                    color={isLongestDurationChecked ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Longest Duration</Text>
            </View>
          </View>
        </View>

        {/* Departing Time View */}
        <View style={styles.alignItemsCenter}>
          <View style={styles.travelContainer}>
            <View style={styles.filterTitleContentContainer}>
              <Text style={styles.filterTitle}>Departing Time</Text>
            </View>
            <View style={styles.filterContentContainerCenter}>
              <Button 
                title={firstTime}
                onPress={() => showMode('firstTime')}
              />
              <Text style={styles.filterTitle}>-</Text>
              <Button 
                title={secondTime}
                onPress={() => showMode('secondTime')}
              />
              {show && (
                <DatePicker
                  onChange={onChangeTime}
                  mode="time"
                />
              )}
            </View>
          </View>
        </View>

        {/* Ticket Price View */}
        <View style={styles.alignItemsCenter}>
          <View style={styles.travelContainer}>
            <View style={styles.filterTitleContentContainer}>
              <Text style={styles.filterTitle}>TicketPrice</Text>
            </View>
            <View style={styles.filterContentContainerCenter}>
              <TextInput placeholderTextColor={'white'}
                style={styles.filterButtonColor}
                onChangeText={newValue => onChangeTicket(newValue, "firstPrice")}
                placeholder=" $"
                defaultValue={firstPrice}
                keyboardType="numeric"
              />
              <Text style={styles.filterTitle}>-</Text>
              <TextInput placeholderTextColor={'white'}
                style={styles.filterButtonColor}
                onChangeText={newValue => onChangeTicket(newValue, "secondPrice")}
                placeholder=" $"
                defaultValue={secondPrice}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Bus Company View */}
        <View style={styles.alignItemsCenter}>
          <View style={styles.travelContainer}>
            <View style={styles.filterTitleContentContainer}>
              <Text style={styles.filterTitle}>Bus Company</Text>
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.filterSelectAll}>{ isAll ? "Uncheck All" : "Check All" }</Text>
              </Pressable>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isIselin}
                    onValueChange={setIselin}
                    color={isIselin ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Iselin</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isRapidoArgentino}
                    onValueChange={setRapidoArgentino}
                    color={isRapidoArgentino ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Rapido Argentino</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isAndesmar}
                    onValueChange={setAndesmar}
                    color={isAndesmar ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Andesmar</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isChevallier}
                    onValueChange={setChevallier}
                    color={isChevallier ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>Chevallier</Text>
            </View>
            <View style={styles.filterContentContainer}>
              <Checkbox
                    style={styles.checkBox}
                    value={isFlechaBus}
                    onValueChange={setFlechaBus}
                    color={isFlechaBus ? '#4630EB' : undefined}
              />
              <Text style={styles.filterContent}>FlechaBus</Text>
            </View>
          </View>
        </View>

        <View style={styles.continueButtonContainer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("SearchListScreen", trip)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

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
    continueButtonContainer: {
      alignItems: 'center',
      marginTop: 10,
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