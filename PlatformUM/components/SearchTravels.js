import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../Constants';

export const SearchTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Search Results</Text>
      </View><View style={styles.buttonContainer}>
        <Button title="Back"/>
        <Button title="Config"/>
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

const styles = StyleSheet.create({
    alignItemsCenter:{
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
    },
    container: {
      flex: 1,
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
  });