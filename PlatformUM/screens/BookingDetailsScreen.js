import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { BookingTitle, SortBy, PassengersDetails, Continue, BusCompany, ShowTravel, ContactDetails } from '../components/BookingDetails';

const BookingDetailsScreen = () => {
  const handleSearch = () => {
    //
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent/>
      <BookingTitle/>
      <ScrollView>
        <ShowTravel/>
        <ContactDetails/>
        <PassengersDetails/>
        <Continue/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingDetailsScreen;
