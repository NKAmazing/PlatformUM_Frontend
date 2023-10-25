import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import ReturnButtonComponent from '../components/ReturnButtonComponent';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { companiesImages } from '../Constants';
import { fetchCompaniesData } from '../functions/CompaniesRequests';


const CompaniesScreen = () => {
  const [companiesData, setCompaniesData] = React.useState([]);

  useEffect(() => {
    fetchCompaniesData()
      .then((data) => {
        setCompaniesData(data);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={companiesImages[item.name.replace(/\s/g, '')]} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <AppBackgroundComponent />
        <View style={styles.returnButton}>
          <ReturnButtonComponent />
        </View>
        <Text style={styles.mainTitle}>Our Partner Companies</Text>
        <FlatList
          data={companiesData}
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
    flex: 1
  },
  listContainer: {
    alignItems: 'center',
    margin: 15
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
    fontWeight: 'bold',
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