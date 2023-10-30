import { SafeAreaView } from 'react-native';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import  { FilterView } from '../components/SearchTravels';

const SortAndFilter = ({ route }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackgroundComponent />
      <FilterView
        route={route.params}
      />
    </SafeAreaView>
  );
};

export default SortAndFilter;
