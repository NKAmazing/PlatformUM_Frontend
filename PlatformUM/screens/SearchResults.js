import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import TripTypeSelector from '../components/TripTypeSelector';
import DateSelector from '../components/DateSelector';
import AppBackgroundComponent from '../components/AppBackgroundComponent';

import { fetchTripsData } from '../functions/TripsRequest';


const SearchScreen = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('One Way');

  const [date, setDate] = useState(new Date());
  
  const [mode, setMode] = useState('date');
  const [text, setText] = useState('Empty');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState('');
  const [passengerCount, setPassengerCount] = useState('1');
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);

    console.log('selectedDate: ', selectedDate);
  };

  const showMode = (currentMode) => {
    setShowDatePicker(true);
    setMode(currentMode);
  };

  const handleSearch = async (origin, destination, date) => {
    try {
      const tripsData = await fetchTripsData(origin, destination, date);
      console.log(tripsData);
    } catch (error) {
      console.error('Error searching for trips:', error);
    }
  };

  return (
      <View style={styles.container}>
        <AppBackgroundComponent />
        <View style={styles.formContainer}>
          <TripTypeSelector tripType={tripType} setTripType={setTripType} />

          <Text style={styles.label}>Origin:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter from where you travel"
            value={origin}
            secureTextEntry={true}
            onChangeText={setOrigin}
          />
          <Text style={styles.label}>Destination:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter where you are going"
            value={destination}
            secureTextEntry={true}
            onChangeText={setDestination}
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
              date={date} // Puedes cambiar esto si tienes una fecha de retorno separada
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
            items={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
            ]}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={passengerCount}
            setValue={(value) => setPassengerCount(value)}
            maxHeight={200}
            autoScroll
          />
          <Button title="Search Tickets" onPress={handleSearch} />
        </View>
      </View>
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
