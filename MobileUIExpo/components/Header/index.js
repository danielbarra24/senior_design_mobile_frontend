import React from "react";
import { Image, View, Pressable, Text } from "react-native";

import styles from "./styles.module.scss";

const backButton = require("../../assets/images/L_Arrow.png");

function Header({ navigation, text }) {
  const handleNavigate = () => {
    if (navigation) {
      navigation.goBack();
    }
  };
  return navigation ? (
    <View style={styles.header}>
      <Pressable onPress={handleNavigate} style={styles.back}>
        <Image source={backButton} />
      </Pressable>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  ) : (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
}

export default Header;
