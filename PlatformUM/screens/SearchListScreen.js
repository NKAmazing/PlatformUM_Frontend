import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SearchTitle, SearchTravels } from '../components/SearchTravels';

const SearchListScreen = ({ route }) => {
  const { tripsData } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <SearchTitle />
      <ScrollView>
        {tripsData.map((trip, index) => (
          console.log("EL TRIP TIENE: ", trip),
          <SearchTravels
            key={index}
            trip={trip}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchListScreen;