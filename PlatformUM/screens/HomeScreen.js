import React from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Slider from '../components/Slider';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import UserOptionsComponent from '../components/UserOptionsComponent';

import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { colorCode, logos, placeholders } from '../Constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppBackgroundComponent />
        <View style={styles.rowPresentation}>
          <Image style={styles.imgComponent} source={logos.Banner} />
        </View>
        <View style={styles.optionContainer}>
            <UserOptionsComponent />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder={placeholders.search}
              placeholderTextColor={placeholders.grayTextColor}
              style={styles.searchInput}
            />
            <View style={styles.searchIcon}>
              <MagnifyingGlassIcon
                size={hp(2.5)}
                strokeWidth={3}
                color={colorCode.searchContainer}
              />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>

        <Slider />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.categoriesContainer}>
          <Categories />
        </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  optionContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: -90,
    marginLeft: 320,
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
  },
  imgComponent: {
    width: 300,
    height: 100,
    marginBottom: 1,
  },
  rowPresentation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 1,
    marginTop: 10,
  },
});

export default HomeScreen;