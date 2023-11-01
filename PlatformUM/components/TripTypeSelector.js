import React from 'react';
import { View, Button } from 'react-native';
import { colorCode, titles, keywords } from '../Constants';

const TripTypeSelector = ({ tripType, setTripType }) => {
  return (
    <View style={styles.tripTypeContainer}>
      <Button
        title={titles.oneWay}
        onPress={() => setTripType(`${keywords.oneWayType}`)}
        color={tripType === `${keywords.oneWayType}` ? `${colorCode.tripContainer}` : '#ccc'}
      />
      <Button
        title={titles.roundTrip}
        onPress={() => setTripType(`${keywords.roundTripType}`)}
        color={tripType === `${keywords.roundTripType}` ? `${colorCode.tripContainer}` : '#ccc'}
      />
    </View>
  );
};

const styles = {
    tripTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
}

export default TripTypeSelector;