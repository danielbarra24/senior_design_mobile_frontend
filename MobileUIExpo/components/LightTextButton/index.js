import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import MainButton from "../../components/MainButton";

import styles from "./styles.module.scss";

function LightTextButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.lightText}>{text}</Text>
    </Pressable>
  );
}

export default LightTextButton;
