import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView, Platform, Pressable, Switch } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/core";
import { SearchTravels } from './SearchTravels';
import { DatePicker } from './DateSelector';

export const BookingTitle = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Booking Details</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Back"
          onPress={() => navigation.navigate("SearchListScreen")}
        />
      </View>
    </View>
  );
};

export const ShowTravel = () => {
  return (
    <SearchTravels 
      disabled={true}
    />
  );
};

export const DetailsTitle = ({title}) => {
  return (
    <View style={styles.filterTitleContentContainer}>
      <Text style={styles.filterTitle}>{title}</Text>
    </View>
  );
}

export const ContactInfo = () => {
  return (
    <View>
      <Text style={styles.travelContent}>Full name</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/avatar-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>Full name</Text>
      </View>
      <Text style={styles.travelContent}>Email</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/mail-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>email@email.com</Text>
      </View>
      <Text style={styles.travelContent}>Phone Number</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/phone-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>+54 9 2604 111111</Text>
      </View>
    </View>
  );
}

export const PassengerInfo = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isFullName, setFullName] = useState('');
  const [isNID, setNID] = useState('');
  const [isBirthdate, setBirthdate] = useState('DD/MM/YYYY');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow (Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    setBirthdate(tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear());
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View>
      <Text style={styles.travelContent}>Full name</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/avatar-icon.png")}
          style={styles.icon}
        />
        <TextInput placeholderTextColor={'white'}
          style={styles.whiteText}
          onChangeText={newValue => setFullName(newValue)}
          placeholder="Name Surname"
          defaultValue={isFullName}
        />
      </View>
      <Text style={styles.travelContent}>NID</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/nid-icon.png")}
          style={styles.icon}
        />
        <TextInput placeholderTextColor={'white'}
          style={styles.whiteText}
          onChangeText={newValue => setNID(newValue)}
          placeholder="National identity card"
          defaultValue={isNID}
        />
      </View>
      <Text style={styles.travelContent}>birthday</Text>
      <Pressable style={styles.buttonBlueContainer} onPress={() => showMode()} >
        <Image
          source={require("../assets/birthday-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>{isBirthdate}</Text>
      </Pressable>
      {show && (
        <DatePicker
          onChange={onChange}
        />
      )}
    </View>
  );
}

export const ContactDetails = () => {

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <DetailsTitle title="Contact Details"/>
        <ContactInfo/>
      </View>
    </View>
  );
}

export const Passenger = ({ id, remove, lastPassanger }) => {
  const passengerID = 'Passenger ' + id;
  const firstPassenger = id === 1 ? true : false;
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.travelContainerInside}>
      <View style={styles.rowToggle}>
        <View style={styles.rowTitle}>
          <Image
            source={require("../assets/passenger-icon.png")}
            style={styles.icon}
          />
          <DetailsTitle title={passengerID}/>
        </View>
        { 
          lastPassanger && 
          <Button
            title="Remove"
            onPress={() => {remove(id - 1)}}
          />
        }
      </View>
      {
        firstPassenger &&
        <View style={styles.rowToggle}>
          <Text style={styles.travelTitle}>Same as contact details</Text>
          <Switch 
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#2396f3' : '#171717'}
            ios_backgroundColor="#2396f3"
            onValueChange={setIsEnabled}
            value={isEnabled}
          />
        </View>
      }
      <PassengerInfo/>
    </View>
  );
}

export const PassengersDetails = () => {
  const [array, setArray] = useState([{id: 0, name: 'Passenger 1'}]);

  const addPassenger = () => {
    const nextVal = [{id: array.length, name: 'Passenger ' + (array.length + 1)}];
    const arrayCopy = [...array, nextVal];
    setArray(arrayCopy);
  }

  function removePassenger(id) {
    const arrayCopy = [...array];
    arrayCopy.splice(id, 1);
    setArray(arrayCopy);
  }

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <DetailsTitle title="Passanger(s) Details"/>
        <View style={styles.alignItemsCenter}>
          {array.map((e, i) =>
            <Passenger
              id={i+1}
              remove={removePassenger}
              lastPassanger={i === array.length - 1 ? true : false}
            />
          )}
        </View>
        <View>
          <Button
            title="Add Passenger"
            onPress={() => addPassenger()}
          />
        </View>
      </View>
    </View>
  );
}

export const Continue = () => {

  return (
    <View style={styles.alignItemsCenter}>
      <Button
        title="Continue"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    alignItemsCenter:{
      alignItems: 'center',
      flexDirection: 'column',
      flexGrow: 1,
      padding: 5,
    },
    titleContainer: {
      marginTop: 35,
      marginBottom: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 35,
      color: 'white',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    buttonBlueContainer: {
      flexDirection: 'row',
      backgroundColor: '#2396f3',
      borderRadius: 5,
      padding: 5,
      fontSize: 20,
    },
    whiteText: {
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
    },
    rowTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowToggle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    travelTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginEnd: 15,
    },
    travelTitle: {
      fontSize: 20,
      color: 'black',
    },
    travelContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    travelContainerInside: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '105%',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 10,
    },
    travelContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    travelContent: {
      fontSize: 15,
      color: 'black',
    },
    travelContentLittle: {
      fontSize: 10,
      color: 'black',
    },

    filterTitleContentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    filterTitle: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    filterContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    filterContentContainerCenter: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    checkBox: { 
      marginTop: 10,
    },
    filterContent: {
      fontSize: 15,
      color: 'black',
      marginHorizontal: 10,
      marginTop: 10,
    },
    filterButtonColor: {
      color: 'white',
      backgroundColor: '#2396f3',
      borderRadius: 5,
      padding: 5,
      fontSize: 20,
    },

    filterSelectAll: {
      fontSize: 15,
      color: '#2396f3',
      fontWeight: 'bold',
      marginHorizontal: 10,
    },

    icon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
  });