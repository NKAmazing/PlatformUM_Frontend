import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, SafeAreaView, Platform, Pressable, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/core";
import { SearchTravels } from './SearchTravels';
import { DatePicker } from './DateSelector';
import getUserInformation from '../functions/UsersRequests'
import { fetchTripsData } from '../functions/TripsRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateReservation from '../functions/ReservationRequest';
import CreatePassenger from '../functions/PassengersRequest';
import Modal from "react-native-modal";

export const BookingTitle = ( route ) => {
  const navigation = useNavigation();

  const handleSearch = async (origin, destination, date) => {
    try {
      const tripsData = await fetchTripsData(origin, destination, date);

      navigation.navigate('SearchListScreen', { tripsData });
    } catch (error) {
      console.error('Error searching for trips:', error);
    }
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Booking Details</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Back"
          onPress={() => handleSearch(route.trip.destination.origin.name, route.trip.destination.destination.name, route.trip.destination.date)}
        />
      </View>
    </View>
  );
};

export const ShowTravel = (route) => {
  return (
    <SearchTravels 
      trip={route.trip}
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

export const ContactInfo = (userInfo) => {
  const [userData, setUserData ] = useState(null);

  useEffect(() => {
    setUserData(userInfo.userInfo);
  }, [userInfo]);

  return (
    <View>
      <Text style={styles.travelContent}>Full name</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/avatar-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>{ userData?.username }</Text>
      </View>
      <Text style={styles.travelContent}>Email</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/mail-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>{ userData?.email }</Text>
      </View>
      <Text style={styles.travelContent}>Phone Number</Text>
      <View style={styles.buttonBlueContainer}>
        <Image
          source={require("../assets/phone-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.whiteText}>{ userData?.telephone }</Text>
      </View>
    </View>
  );
}

export const ContactDetails = (route) => {
  const [userData, setUserData ] = useState(null);

  useEffect(() => {
    // Fetch User Information
    async function fetchUserData() {
        const userData = await getUserInformation();
        if (userData) {
            setUserData(userData);
        }
    }
    fetchUserData();
  }, []);

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <DetailsTitle title="Contact Details"/>
        <ContactInfo
          userInfo={userData}
        />
      </View>
      <PassengersDetails
        trip={route.trip}
      />
    </View>
  );
}

export const Passenger = ({ id, remove, lastPassenger, savePassenger }) => {
  // Passenger
  const passengerID = 'Passenger ' + id;
  const firstPassenger = id === 1 ? true : false;
  const [isEnabled, setIsEnabled] = useState(true);

  // Passenger Information
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isFullName, setFullName] = useState(null);
  const [isGender, setGender] = useState("MALE");
  const [isNID, setNID] = useState(null);
  const [isBirthdate, setBirthdate] = useState(null);

  //const [isReady, setIsReady] = useState(null);
  
  const saveFullName = async (value) => {
    if (firstPassenger && isEnabled){
      try {
        await AsyncStorage.setItem('fullName', value)
      } catch (e) {
        console.error('Error saving full name:', e);
      }
    }

    setFullName(value);
  }

  const getFullName = async () => {
    try {
      return await AsyncStorage.getItem('fullName')
    } catch(e) {
      console.error('Error getting full name:', e);
    }
  }

  const saveGender = async (value) => {
    if (firstPassenger && isEnabled){
      try {
        await AsyncStorage.setItem('gender', value)
      } catch (e) {
        console.error('Error saving gender:', e);
      }
    }

    setGender(value);
  }

  const getGender = async () => {
    try {
      return await AsyncStorage.getItem('gender')
    } catch(e) {
      console.error('Error getting gender:', e);
    }
  }

  const saveNID = async (value) => {
    if (firstPassenger && isEnabled) {
        try {
          await AsyncStorage.setItem('NID', value)
        } catch (e) {
          console.error('Error saving NID:', e);
        }
    }

    setNID(value);
  }

  const getNID = async () => {
    try {
      return await AsyncStorage.getItem('NID')
    } catch(e) {
      console.error('Error getting NID:', e);
    }
  }

  const saveBirthdate = async (value) => {
    if (firstPassenger && isEnabled) {
      try {
        await AsyncStorage.setItem('birthdate', value)
      } catch (e) {
        console.error('Error saving birthdate:', e);
      }
    }
    
    setBirthdate(value);
  }
  const getBirthdate = async () => {
    try {
      return await AsyncStorage.getItem('birthdate')
    } catch(e) {
      console.error('Error getting birthdate:', e);
    }
  }

  useEffect(() => {
    // Fetch User Information
    async function fetchFullName() {
      const fullName = await getFullName();
      if (fullName) {
        setFullName(fullName);
      }
    }
    async function fetchGender() {
      const gender = await getGender();
      if (gender) {
        setGender(gender);
      }
    }
    async function fetchNID() {
      const NID = await getNID();
      if (NID) {
        setNID(NID);
      }
    }
    async function fetchBirthdate() {
      const birthdate = await getBirthdate();
      if (birthdate) {
        setBirthdate(birthdate);
      }
    }

    const fetchPassengerInfo = async () => {
      try {
        if (!firstPassenger)
          //return setIsReady(true);
          return;

        await fetchFullName();
        await fetchGender();
        await fetchNID();
        await fetchBirthdate();
        //return setIsReady(true);
      } catch (e) {
        console.error('Error fetching passenger info:', e);
        return null;
      }
    }

    fetchPassengerInfo();
  }, []);

  /*useEffect(() => {
    if (null === isReady) {
       return;
    }
    //savePassengerInfo();
  }, [isReady]);*/

  useEffect(() => {
    savePassengerInfo();
  }, [isFullName, isNID, isBirthdate, isGender]);

  const savePassengerInfo = () => {
    if (firstPassenger && isFullName && isNID && isBirthdate && isGender) {
      savePassenger({
        id: id - 1,
        fullname: isFullName,
        birthdate: isBirthdate,
        nid: isNID,
        gender: isGender,
        reservation: null,
        seatNumber: null
      });
    }
    else if (isFullName && isNID && isBirthdate && isGender) {
      savePassenger({
        id: id - 1,
        fullName: isFullName,
        dateOfBirth: isBirthdate,
        nid: isNID,
        gender: isGender,
        reservation: null,
        seatNumber: null
      });
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow (Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    // Format date to DD/MM/YYYY
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10){
      month = '0' + month;
    }

    tempDate = day + '-' + month + '-' + year;

    saveBirthdate(tempDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.travelContainerInside}>
      {/* Passenger */}
      <View style={styles.rowToggle}>
        <View style={styles.rowTitle}>
          <Image
            source={require("../assets/passenger-icon.png")}
            style={styles.icon}
          />
          <DetailsTitle title={passengerID}/>
        </View>
        {
          lastPassenger && !firstPassenger &&
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
      
      {/* Passenger Information */}
      <View>
        <Text style={styles.travelContent}>Full name</Text>
        <View style={styles.buttonBlueContainer}>
          <Image
            source={require("../assets/avatar-icon.png")}
            style={styles.icon}
          />
          <TextInput placeholderTextColor={'white'}
            style={styles.whiteText}
            onChangeText={newValue => saveFullName(newValue)}
            placeholder={ firstPassenger && isEnabled && isFullName ? isFullName : "Name Surname"}
            defaultValue={isFullName}
          />
        </View>
        <View>
          <Text style={styles.travelContent}>Gender</Text>
          <View style={styles.buttonBlueContainer}>
            <Image
              source={require("../assets/avatar-icon.png")}
              style={[{marginTop: 10}, styles.icon]}
            />
            <Picker
              style={styles.filterPicker}
              itemStyle={{height: 25, color: 'white', fontSize: 20}}
              selectedValue={isGender}
              onValueChange={(itemValue, itemIndex) =>
                saveGender(itemValue, itemIndex)
              }>
              <Picker.Item label="Male" value="MALE" />
              <Picker.Item label="Female" value="FEMALE" />
              <Picker.Item label="Other" value="OTHER" />
            </Picker>
          </View>
        </View>
        <Text style={styles.travelContent}>NID</Text>
        <View style={styles.buttonBlueContainer}>
          <Image
            source={require("../assets/nid-icon.png")}
            style={styles.icon}
          />
          <TextInput placeholderTextColor={'white'}
            style={styles.whiteText}
            onChangeText={newValue => saveNID(newValue)}
            placeholder={ firstPassenger && isEnabled && isNID ? isNID : "National identity card"}
            defaultValue={isNID}
          />
        </View>
        <Text style={styles.travelContent}>birthday</Text>
        <Pressable style={styles.buttonBlueContainer} onPress={() => showMode()} >
          <Image
            source={require("../assets/birthday-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.whiteText}>{isBirthdate ? isBirthdate : 'DD/MM/YYYY'}</Text>
        </Pressable>
        {show && (
          <DatePicker
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

export const PassengersDetails = (route) => {
  const [array, setArray] = useState([{id: 0, name: 'Passenger 1'}]);
  const [passengersState, setPassengersState] = useState({
    passengers: [
      /*{
        id: 0, //Remove id when pushing to the API
        fullName: 'Nombre del Pasajero 1',
        dateOfBirth: new Date('1990-01-01'),
        nid: 12345,
        gender: 'Masculino',
        reservation: 'Reserva 1',
        seatNumber: 1
      },*/
    ]
  });

  const addPassenger = () => {
    const nextVal = [{id: array.length, name: 'Passenger ' + (array.length + 1)}];
    const arrayCopy = [...array, nextVal];
    setArray(arrayCopy);
  }

  function removePassenger(id) {
    const arrayCopy = [...array];
    arrayCopy.splice(id, 1);
    setArray(arrayCopy);
    removePassengerState(id);
  }

  function savePassenger(passengerInfo) {

    if (passengerInfo.id === null) {
      return;
    }

    
    // Check if passenger already exists and update it
    if (passengersState.passengers.length > 0) {
      for (let index = 0; index < passengersState.passengers.length; index++) {
        const passenger = passengersState.passengers[index];
        if (passenger.id === passengerInfo.id) {
          updatePassengerState(index, passengerInfo);
          return;
        }
      }
    }

    // Add passenger if it doesn't exist
    createPassengerState(passengerInfo);
  }

  function createPassengerState(passengerInfo) {
    const passengersCopy = [...passengersState.passengers];
    passengersCopy.push(passengerInfo);
    setPassengersState({passengers: passengersCopy});
  }

  function updatePassengerState(index, passengerInfo) {
    const passengersCopy = [...passengersState.passengers];
    passengersCopy[index] = passengerInfo;
    setPassengersState({passengers: passengersCopy});
  }

  function removePassengerState(id) {
    const passengersCopy = [...passengersState.passengers];
    passengersState.passengers.forEach((passenger, index) => {
      if (passenger.id === id) {
        passengersCopy.splice(index, 1);
      }
    });
    setPassengersState({passengers: passengersCopy});
  }

  //useEffect(() => { console.log(passengersState) }, [passengersState])

  return (
    <View style={styles.alignItemsCenter}>
      <View style={styles.travelContainer}>
        <DetailsTitle title="Passanger(s) Details"/>
        <View style={styles.alignItemsCenter}>
          {array.map((e, i) =>
            <Passenger
              key={e.id}
              id={i+1}
              remove={removePassenger}
              lastPassenger={i === array.length - 1 ? true : false}
              savePassenger={savePassenger}
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
      <Continue
        trip={route.trip}
        passengersDetails={passengersState}
      />
    </View>
  );
}

const Continue = ({trip, passengersDetails}) => {

  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();

  const handleContinue = async (trip, passengersDetails) => {
    try {
      if (passengersDetails.passengers.length === 0) {
        setErrorMessage("Please add at least one passenger");
        toggleModal();
        return;
      }

      await PassengerSelectSeat(passengersDetails, trip);
    } catch (error) {
      console.error('Error searching for trips:', error);
    }
  }

  const PassengerSelectSeat = async (passengersDetails, trip) => {
    try {
      const seats = trip.company.vehicle[0].seats; //TODO: Change to the selected vehicle

      var passengersCount = 0;
      trip.reservations.map((reservation) => {
        passengersCount += reservation.passengers.length;
      });

      const seatsAvailable = seats - passengersCount;

      if (seatsAvailable > 0 && passengersDetails.passengers.length <= seatsAvailable) {
        const price = trip.price * passengersDetails.passengers.length;
        const reservation = await SaveReservation(price, trip);
        await SavePassangers(seatsAvailable, passengersDetails, reservation);
      }
      else{
        setErrorMessage("No seats available");
        toggleModal();
      }
    }
    catch (e) {
      console.error('Error selecting seat:', e);
    }
  }

  const SaveReservation = async (price, trip) => {
    const user = await getUserInformation();
    return await CreateReservation(user.id, trip.id, price);
  }

  const SavePassangers = async (seatsAvailable, passengersDetails, reservation) => {
    try {
      const passengers = passengersDetails.passengers;

      // Remove id from passengers
      passengers.forEach((passenger, index) => {
        delete passenger.id;
        passenger.seatNumber = seatsAvailable;
        seatsAvailable--;
      });

      // Save passengers
      passengers.forEach(async (passenger, index) => {
        await CreatePassenger(passenger, reservation.id);
      });

      //await ApiManager.post('/passengers', passengersDetails)
    } catch (e) {
      console.error('Error saving passengers details:', e);
    }
  }

  return (
    <View style={styles.alignItemsCenter}>
      <Button
        title="Continue"
        onPress={async () => handleContinue(trip, passengersDetails)}
      />

      <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <Button title="Close" onPress={toggleModal} />
          </View>
      </Modal>
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
      fontSize: 21,
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
    filterPicker: {
      fontSize: 15,
      width: 220,
      color: 'white',
    },
    icon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    errorMessage: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'red',
    },
  });