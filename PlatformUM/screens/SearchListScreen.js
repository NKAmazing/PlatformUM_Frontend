import { ScrollView, SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { SearchTitle, SearchTravels } from '../components/SearchTravels';

const SearchListScreen = ({ route }) => {
  const { tripsData } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <SearchTitle 
        route={route}
      />
      <ScrollView>
        {tripsData.map((trip, index) => (
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