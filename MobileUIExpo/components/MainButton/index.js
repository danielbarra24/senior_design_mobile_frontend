import React from "react";
import { Text, Pressable } from "react-native";

import styles from "./styles.module.scss";

const MainButton = ({ onPress, text, long }) => {
  return long ? (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? styles.mainButtonPressedLong : styles.mainButtonLong
      }
      children={({ pressed }) => (
        <Text
          style={pressed ? styles.mainButtonTextPressed : styles.mainButtonText}
        >
          {text}
        </Text>
      )}
    />
  ) : (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? styles.mainButtonPressed : styles.mainButton
      }
      children={({ pressed }) => (
        <Text
          style={pressed ? styles.mainButtonTextPressed : styles.mainButtonText}
        >
          {text}
        </Text>
      )}
    />
  );
};

export default MainButton;
