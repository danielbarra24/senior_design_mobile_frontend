import React from "react";
import { useState } from "react";

import { TextInput, View, Text } from "react-native";

import styles from "./styles.module.scss";

function TextEntry({ onTextChange, name, isError, secure, value }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const onTextUpdate = (text) => {
    if (text.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    onTextChange(text);
  };

  return (
    <View
      style={
        isError() ? styles.textInputContainerError : styles.textInputContainer
      }
      key={"wrapper" + name}
    >
      {isEmpty && !isFocused ? null : (
        <Text
          style={isError() ? styles.nameTextError : styles.nameText}
          key={"upper" + name}
        >
          {name}
        </Text>
      )}
      <TextInput
        key={"text-box" + name}
        onChangeText={(text) => onTextUpdate(text)}
        style={styles.inputText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        placeholder={isFocused ? "" : name}
        placeholderTextColor={isError() ? "#ed7b7b" : "#72777a"}
        secureTextEntry={secure}
        defaultValue={value}
      ></TextInput>
    </View>
  );
}

export default TextEntry;
