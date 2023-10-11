import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const DateSelector = ({
  label,
  date,
  showDatePicker,
  mode,
  showMode,
  onChange,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}:</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => showMode('date')}>
          <AntDesign name="calendar" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export const DatePicker = ({ onChange, mode = 'date' }) => {
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={new Date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    width: '100%',
    fontSize: 16,
    marginBottom: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    marginBottom: 8,
  },
  dateText: {
    marginTop: 4,
  },
});

export default DateSelector;