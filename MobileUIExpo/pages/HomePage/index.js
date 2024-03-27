import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import MainButton from "../../components/MainButton";

import LightTextButton from "../../components/LightTextButton";

import styles from "./styles.module.scss";

function HomePage({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Camera");
  };
  const handleCredits = () => {
    navigation.navigate("Credits");
  };
  const homeImage = require("../../assets/images/Woman_Documenting_Hole.png");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Pothole
          <Text style={styles.largeTextPurple}>Pros</Text>
        </Text>
        <Image source={homeImage} style={styles.homeImage} />
        <Text style={styles.midText}>Find Potholes, {"\n"}Get Paid</Text>
        <MainButton onPress={handleNavigate} text={"Document"} />
        <Pressable onPress={handleCredits} style={styles.credits}>
          <Text style={styles.lightTextGrey}>{"View Your Credits"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
