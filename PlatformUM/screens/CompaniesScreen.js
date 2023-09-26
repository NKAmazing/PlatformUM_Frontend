import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import ReturnButtonComponent from '../components/ReturnButtonComponent';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

// ! Bring data from the backend
const companiesData = [
  {
    id: '1',
    title: 'Company 1',
    image: require('../assets/bus-icon.png'),
  },
  {
    id: '2',
    title: 'Company 2',
    image: require('../assets/icon.png'),
  },
  {
    id: '3',
    title: 'Company 3',
    image: require('../assets/icon.png'),
  },
  {
    id: '4',
    title: 'Company 4',
    image: require('../assets/icon.png'),
  }
];

const CompaniesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <View style={styles.container}>
        <View style={styles.returnButton}>
          <ReturnButtonComponent />
        </View>
        <Text style={styles.mainTitle}>Our Partner Companies</Text>
        <FlatList
          data={companiesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 16,
    minWidth: '90%',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    padding: 16,
    textAlign: 'center',
},
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
});

export default CompaniesScreen;