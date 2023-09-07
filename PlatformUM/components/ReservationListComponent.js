import React from "react";
import { View, Button, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const ReservationListComponent = ({ reservationList, setReservationList }) => {
    return (
        <View style={styles.reservationListContainer}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Reservation List</Text>   
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Edit")}
                >
                    <Text style={styles.buttonText}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/bus-icon.png")}
                        style={styles.icon}
                    />   
                </View>
                <Text style={styles.textContainer}>Reservation 1 – 1 hr 45 min</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/bus-icon.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.textContainer}>Reservation 2 – 1 hr 30 min</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require("../assets/bus-icon.png")}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.textContainer}>Reservation 3 – 2 hr 13 min</Text>
            </View>
        </View>
    );
    }

const styles = {
    reservationListContainer: {
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        height: '40%',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    button: {
        width: 65,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#16247d',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    row: {
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "center",
        marginBottom: 16,
        backgroundColor: '#E7E6E6',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        height: '20%',
    },
    icon: {
        width: '100%',
        height: '100%',
        marginRight: 50,
        borderRadius: 75,
        marginLeft: 5,
        marginTop: 1,
        backgroundColor: "white",
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 75,
        backgroundColor: "#E7E6E6",
    },
    textContainer: {
        fontSize: 15,
        fontWeight: 'light',
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
    },
};

export default ReservationListComponent;