import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import LightTextButton from "../../components/LightTextButton";
import UploadComponent from "../../components/UploadComponent";
import useLocation from "../../hooks/useLocation";

import styles from "./styles.module.scss";

function UploadPage({ navigation }) {
  const { location, errorMsg } = useLocation();

  const handleReturn = () => {
    navigation.navigate("Home");
  };

  const processImage = (image) => {
    if (errorMsg) {
      switch (errorMsg) {
        case "permission":
          alert(
            "Permission to access location was denied. Please enable location services for this app in your phone's settings in order to use this feature."
          );
          break;
        default:
          alert(errorMsg);
      }
    } else {
      // alert the location longitude and latitude
      alert(
        `Longitude: ${location.coords.longitude}\nLatitude: ${location.coords.latitude}`
      );
      alert("Image processed!");
    }
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
