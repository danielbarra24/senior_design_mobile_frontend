import React from "react";
import { Image, View, Pressable, Text } from "react-native";

import styles from "./styles.module.scss";

const backButton = require("../../assets/images/L_Arrow_White.png");

function TransparentHeader({ navigation, text }) {
  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View style={styles.transparentBackground} />
      <Pressable onPress={handleNavigate} style={styles.back}>
        <Image source={backButton} />
      </Pressable>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
}

export default TransparentHeader;
