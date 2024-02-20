import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import MainButton from "../MainButton";

import styles from "./styles.module.scss";

function LightTextPurpleButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.lightTextPurple}>{text}</Text>
    </Pressable>
  );
}

export default LightTextPurpleButton;
