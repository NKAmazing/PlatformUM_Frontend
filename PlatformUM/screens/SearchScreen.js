import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import TripTypeSelector from '../components/TripTypeSelector';
import DateSelector from '../components/DateSelector';
import AppBackgroundComponent from '../components/AppBackgroundComponent';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchTripsData } from '../functions/TripsRequest';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('One Way');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState('');
  const [passengerCount, setPassengerCount] = useState('1');
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = (field) => {
    setSelectedDateField(field);
    setShowDatePicker(true);
  };

  const showMode = (currentMode) => {
    setShowDatePicker(true);
    setMode(currentMode);
  };

  const handleSave = () => {
    // Aquí puedes realizar acciones para guardar los datos
    // Por ejemplo, enviar una solicitud de API para guardar los datos en el servidor
    console.log('Datos guardados:', { origin, destination, tripType, date, passengerCount });
  };

  const handleSearch = async (origin, destination, date) => {
    try {
      const tripsData = await fetchTripsData(origin, destination, date);

      navigation.navigate('SearchListScreen', { tripsData });
    } catch (error) {
      console.error('Error searching for trips:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppBackgroundComponent />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContainer}>
            <TripTypeSelector tripType={tripType} setTripType={setTripType} />

            <Text style={styles.label}>Origin:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter from where you travel"
              value={origin}
              onChangeText={(text) => setOrigin(text)}
            />
            <Text style={styles.label}>Destination:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter where you are going"
              value={destination}
              onChangeText={(text) => setDestination(text)}
            />
            <DateSelector
              label="Departure Date"
              date={date}
              showDatePicker={showDatePicker}
              mode={mode}
              showMode={showMode}
              onChange={onChange}
            />

            {tripType === 'Round Trip' && (
              <DateSelector
                label="Return Date"
                date={date}
                showDatePicker={showDatePicker}
                mode={mode}
                showMode={showMode}
                onChange={onChange}
              />
            )}

            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onChange}
              />
            )}

            <Text style={styles.label}>Passenger Count:</Text>
            <DropDownPicker
              style={styles.dropDown}
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={passengerCount}
              setValue={(value) => setPassengerCount(value)}
              maxHeight={100}
              autoScrollToDefaultValue={true}
            />
            <Button
              title="Search Tickets"
              onPress={() => handleSearch(origin, destination, date)}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Button title="Save" onPress={handleSave} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 26,
    borderRadius: 8,
    width: '90%',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  dropDown: {
    marginBottom: 16,
    width: '20%',
  },
});

export default SearchScreen;