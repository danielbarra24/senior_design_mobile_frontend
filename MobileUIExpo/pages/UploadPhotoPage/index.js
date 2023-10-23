import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import LightTextButton from "../../components/LightTextButton";
import UploadComponent from "../../components/UploadComponent";

import styles from "./styles.module.scss";

function UploadPage({ navigation }) {
  const handleReturn = () => {
    navigation.navigate("Home");
  };

  const processImage = (image) => {
    alert("Image processed!");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Pothole
          <Text style={styles.largeTextPurple}>Pros</Text>
        </Text>
        <UploadComponent processImage={processImage} />
        <LightTextButton onPress={handleReturn} text="Return" />
      </View>
    </SafeAreaView>
  );
}

export default UploadPage;
