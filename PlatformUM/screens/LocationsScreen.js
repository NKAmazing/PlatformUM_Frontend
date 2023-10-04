import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import ReturnButtonComponent from '../components/ReturnButtonComponent';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchLocationsData } from '../functions/CitiesRequests';
import { cityImages } from '../Constants';


const LocationsScreen = () => {
  const [locationsData, setLocationsData] = React.useState([]);

  useEffect(() => {
    fetchLocationsData()
      .then((data) => {
        setLocationsData(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={cityImages[item.name.replace(/\s/g, '')]} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.state}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <View style={styles.container}>
        <View style={styles.returnButton}>
          <ReturnButtonComponent />
        </View>
        <Text style={styles.mainTitle}>Discover Amazing Locations</Text>
        <FlatList
          data={locationsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    padding: 5,
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

export default LocationsScreen;