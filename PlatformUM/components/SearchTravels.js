import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView, Platform, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../Constants';
import { useNavigation } from "@react-navigation/core";
import { DatePicker } from './DateSelector';


export const SearchTitle = () => {
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
          onPress={() => navigation.navigate("SortAndFilter")}
        />
      </View>
    </View>
  );
};

export const FilterTitle = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sort & Filter</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Back"
          onPress={() => navigation.navigate("SearchListScreen")}
        />
      </View>
    </View>
  );
};

export const SearchTravels = ({ disabled = false }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.alignItemsCenter}>
      <Pressable style={styles.travelContainer} disabled={disabled} onPress={() => navigation.navigate("BookingDetails")} >
        <View style={styles.travelTitleContainer}>
          <View style={styles.travelTitleContainer}>
            <Image source={ categoriesData.find(item => item.title === 'Companies').image } style={{ width: wp(15), height: wp(10), borderRadius: 15, margin: wp(3) }} />
            <Text style={styles.travelTitle}>Company</Text>
          </View>
          <Text style={styles.travelTitle}>$ 00.00</Text>
        </View>
        <View style={styles.travelContentContainer}>
          <Text style={styles.travelContent}>Start Place</Text>
          <Text style={styles.travelContent}>Finish Place</Text>
        </View>
        <View style={styles.travelContentContainer}>
          <Text style={styles.travelContent}>08:00</Text>
          <Text style={styles.travelContentLittle}>duration 01:00</Text>
          <Text style={styles.travelContent}>09:00</Text>
        </View>
        <View style={styles.travelContentContainer}>
          <Text style={styles.travelContent}>29 Sep 2023</Text>
          <Text style={styles.travelContent}>29 Sep 2023</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const SortBy = () => {
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

  return (
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
  );
}

export const DepartingTime = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('Empty');
  const [show, setShow] = useState(false);
  const [firstTime, setFirstTime] = useState('00:01');
  const [secondTime, setSecondTime] = useState('23:59');

  const onChange = (event, selectedDate) => {
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

  return (
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
              onChange={onChange}
              mode="time"
            />
          )}
        </View>
      </View>
    </View>
  );
}

export const TicketPrice = () => {
  const [firstPrice, setFirstPrice] = useState('');
  const [secondPrice, setSecondPrice] = useState('');

  const onChange = (newValue, price) => {
    if (price == "firstPrice")
      setFirstPrice(newValue);
    else if (price == "secondPrice")
      setSecondPrice(newValue);
    else
      console.log("Error: price is not defined")
  };

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <View style={styles.filterTitleContentContainer}>
          <Text style={styles.filterTitle}>TicketPrice</Text>
        </View>
        <View style={styles.filterContentContainerCenter}>
          <TextInput placeholderTextColor={'white'}
            style={styles.filterButtonColor}
            onChangeText={newValue => onChange(newValue, "firstPrice")}
            placeholder=" $"
            defaultValue={firstPrice}
            keyboardType="numeric"
          />
          <Text style={styles.filterTitle}>-</Text>
          <TextInput placeholderTextColor={'white'}
            style={styles.filterButtonColor}
            onChangeText={newValue => onChange(newValue, "secondPrice")}
            placeholder=" $"
            defaultValue={secondPrice}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
}

export const BusCompany = () => {
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
  );
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
  });