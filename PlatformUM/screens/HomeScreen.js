  import React from 'react';
  import { View, StyleSheet, TextInput, Text, SafeAreaView } from 'react-native';
  import Slider from '../components/Slider';
  import AppBackgroundComponent from '../components/AppBackgroundComponent';

  import {
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
  import Categories from '../components/Categories';


  const HomeScreen = () => {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <AppBackgroundComponent />
          
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <TextInput
                placeholder="Search for a trip!"
                placeholderTextColor="gray"
                style={styles.searchInput}
              />
              <View style={styles.searchIcon}>
                <MagnifyingGlassIcon
                  size={hp(2.5)}
                  strokeWidth={3}
                  color="gray"
                />
              </View>
            </View>
          </View>
          
          <Slider />

          <View style={styles.categoriesContainer}>
            <Categories />
          </View>

        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer: {
      marginTop: '30%',
      marginLeft: '5%',
      marginRight: '5%',
    },
    optionContainer: {
      width: '90%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 20,
    },
    optionText: {
      marginTop: 5,
      fontSize: 12,
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 30,
      paddingHorizontal: 16,
    },
    searchInput: {
      flex: 1,
      fontSize: hp(1.7),
      paddingVertical: 10,
      paddingLeft: 10,
    },
    searchIcon: {
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 10,
      marginLeft: 10,
    },
    categoriesContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    }
  });

  export default HomeScreen;