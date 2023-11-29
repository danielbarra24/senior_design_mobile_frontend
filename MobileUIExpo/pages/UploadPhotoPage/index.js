import React from "react";
import { Text, SafeAreaView, Image, View, Pressable } from "react-native";

import LightTextButton from "../../components/LightTextButton";
import UploadComponent from "../../components/UploadComponent";
import useLocation from "../../hooks/useLocation";

import styles from "./styles.module.scss";

function UploadPage({ navigation }) {
  const { location, errorMsg } = useLocation();
  const [detectionResult, setDetectionResult] = React.useState(null);

  const handleReturn = () => {
    navigation.navigate("Home");
  }; //make format of image correct because idk if this is compatible w what we have rn
  const processImage = async (image) => {
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
      alert(
        `Longitude: ${location.coords.longitude}\nLatitude: ${location.coords.latitude}`
      );

      try {
        console.log(image);
        let formData = new FormData();
        formData.append("image", {
          uri: image,
          type: "image/jpeg",
          name: "upload.jpg",
        });
        formData.append("latitude", location.coords.latitude.toString());
        formData.append("longitude", location.coords.longitude.toString());
        formData.append("filename", "test.jpg"); // If needed by your Flask backend

        const response = await fetch("http://127.0.0.1:5000/detect-pothole", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Pothole detection successful.");
          const result = await response.json();
          setDetectionResult(result);
        } else {
          // console.log(response);
          // console.log("Error detecting pothole.");
          setDetectionResult(null);
        }
      } catch (error) {
        // console.error("Error detecting pothole:", error);
        setDetectionResult(null);
      }
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
