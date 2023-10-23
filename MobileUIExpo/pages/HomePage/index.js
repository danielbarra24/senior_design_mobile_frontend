import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";

import MainButton from "../../components/MainButton";

import styles from "./styles.module.scss";

function HomePage({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("Upload");
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
        <MainButton onPress={handleNavigate} text={"Begin"} />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
