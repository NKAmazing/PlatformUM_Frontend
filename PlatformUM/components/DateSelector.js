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
      <TouchableOpacity onPress={() => showMode('date')}>
        <AntDesign name="calendar" size={30} color="black" />
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  dateText: {
    // fontSize: 18,
    marginTop: 4,
  },
});

export default DateSelector;