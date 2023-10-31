import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { BookingTitle, SortBy, PassengersDetails, Continue, BusCompany, ShowTravel, ContactDetails } from '../components/BookingDetails';

const BookingDetailsScreen = ({ route }) => {

  const handleSearch = () => {
    //
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent/>
      <BookingTitle
        trip={route.params.trip}
      />
      <ScrollView>
        <ShowTravel
          trip={route.params.trip}
        />
        <ContactDetails/>
        <Continue/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetailsScreen;
