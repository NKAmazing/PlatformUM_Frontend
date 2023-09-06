import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { SearchTitle,SearchTravels } from '../components/SearchTravels';

const SearchListScreen = () => {
  const handleSearch = () => {
    //
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <SearchTitle/>
      <ScrollView contentContainerStyle={styles.container}>
        <SearchTravels/>
        <SearchTravels/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchListScreen;
