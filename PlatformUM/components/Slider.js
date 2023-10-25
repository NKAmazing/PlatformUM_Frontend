import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');


const Slider = () => {
  return (
    <View style={styles.wrapper}>
        <Swiper style={styles.swiper} showsButtons={false} showsPagination={true}>
        <View style={styles.slide}>
            <Image
            source={require('../assets/images/bus1.jpg')}
            style={styles.image}
            />
        </View>
        <View style={styles.slide}>
            <Image
            source={require('../assets/images/bus2.jpg')}
            style={styles.image}
            />
        </View>
        <View style={styles.slide}>
            <Image
            source={require('../assets/images/bus3.jpg')}
            style={styles.image}
            />
        </View>
        </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: '8%',
        marginBottom: '8%',
        height: 200,
    },
    swiper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: width-50,
      flex: 1,
      borderRadius: 15,
    },
  });

export default Slider;