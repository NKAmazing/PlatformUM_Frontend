import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { SearchTitle, SearchTravels } from '../components/SearchTravels';

const SearchListScreen = () => {
  const handleSearch = () => {
    //
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent/>
      <SearchTitle/>
      <ScrollView>
        <SearchTravels/>
        <SearchTravels/>
        <SearchTravels/>
        <SearchTravels/>
        <SearchTravels/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchListScreen;
