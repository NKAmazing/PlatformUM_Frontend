import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logos } from "../Constants";


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
        source={logos.ReturnButton}
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