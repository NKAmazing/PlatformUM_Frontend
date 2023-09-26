import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ReturnButtonComponent = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.returnButton}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        source={require('../assets/return-button-icon.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = {
  returnButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
};

export default ReturnButtonComponent;