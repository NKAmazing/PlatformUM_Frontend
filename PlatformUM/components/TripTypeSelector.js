import React from 'react';
import { View, Button } from 'react-native';


const TripTypeSelector = ({ tripType, setTripType }) => {
  return (
    <View style={styles.tripTypeContainer}>
      <Button
        title="One Way"
        onPress={() => setTripType('One Way')}
        color={tripType === 'One Way' ? '#007AFF' : '#ccc'}
      />
      <Button
        title="Round Trip"
        onPress={() => setTripType('Round Trip')}
        color={tripType === 'Round Trip' ? '#007AFF' : '#ccc'}
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