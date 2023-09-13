import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../Constants';
import { useNavigation } from "@react-navigation/core";

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

export const SearchTravels = () => {
  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <View style={styles.travelTitleContainer}>
          <Image source={ categoriesData.find(item => item.title === 'Companies').image } style={{ width: wp(15), height: wp(10), borderRadius: 15, margin: wp(3) }} />
          <Text style={styles.travelTitle}>Company</Text>
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
      </View>
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
  const [mode, setMode] = useState('date');
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

  const showMode = (currentMode, time) => {
    setShow(true);
    setMode(currentMode);
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
            onPress={() => showMode('time', 'firstTime')}
          />
          <Text style={styles.filterTitle}>-</Text>
          <Button 
            title={secondTime}
            onPress={() => showMode('time', 'secondTime')}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export const TicketPrice = () => {
  const [firstPrice, setFirstPrice] = useState('1000 $');
  const [secondPrice, setSecondPrice] = useState('5000 $');

  const onChange = (event, selectedDate) => {
    
  };

  const showMode = (currentMode, time) => {
    setShow(true);
    setMode(currentMode);
    setTime(time)
  };

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <View style={styles.filterTitleContentContainer}>
          <Text style={styles.filterTitle}>TicketPrice</Text>
        </View>
        <View style={styles.filterContentContainerCenter}>
          <TextInput
            style={styles.filterButtonColor}
            onChangeText={onChange}
            value={firstPrice}
            placeholder={firstPrice}
            keyboardType="numeric"
          />
          <Text style={styles.filterTitle}>-</Text>
          <TextInput
            style={styles.filterButtonColor}
            onChangeText={onChange}
            value={secondPrice}
            placeholder={secondPrice}
            keyboardType="numeric"
          />
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
      marginHorizontal: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    travelTitle: {
      fontSize: 25,
      color: 'black',
    },
    travelContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '80%',
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
  });