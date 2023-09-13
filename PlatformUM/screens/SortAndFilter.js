import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { FilterTitle, SortBy, DepartingTime, TicketPrice } from '../components/SearchTravels';

const SortAndFilter = () => {
  const handleSearch = () => {
    //
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <FilterTitle/>
      <ScrollView>
        <SortBy/>
        <DepartingTime/>
        <TicketPrice/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SortAndFilter;
