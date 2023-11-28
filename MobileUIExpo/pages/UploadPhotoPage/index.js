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
//make format of image correct because idk if this is compatible w what we have rn 
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
      try {
        const response =  fetch("http://127.0.0.1:5000/detect-pothole", {
          method: "POST",
          body: formData,
       
        });

        if (response.ok) {
          console.log("Pothole detection successful.");
          const result = response.json();
          setDetectionResult(result.detected);
          // Handle the response or update the UI accordingly
        } else {
          console.error("Error detecting pothole.");
          setDetectionResult(null);
        }
      } catch (error) {
        console.error("Error detecting pothole:", error);
        setDetectionResult(null);
      }
   
      //write callback
  
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
