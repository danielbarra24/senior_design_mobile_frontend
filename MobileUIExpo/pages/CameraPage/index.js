import React, { useState, useEffect, useRef } from "react";

import { Camera, CameraType } from "expo-camera";

import * as Linking from "expo-linking";

import { View, Text, TouchableOpacity, Pressable, Button } from "react-native";

import styles from "./styles.module.scss";

import TransparentHeader from "../../components/TransparentHeader";
import useLocation from "../../hooks/useLocation";

import { postDataMultiForm } from "../../util/api";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import { selectEmail } from "../../store/emailSlice";

function CameraPage({ navigation }) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const intervalRef = useRef();
  const insets = useSafeAreaInsets();
  const [auto, setAuto] = useState(false);
  const { location, errorMsg } = useLocation();
  const email = useSelector(selectEmail);

  useEffect(() => {
    if (auto) {
      intervalRef.current = setInterval(takePicture, 6000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // Clean up on unmount or when auto changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [auto]);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, []);

  if (permission === null) {
    // Permissions are still null
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <SafeAreaView style={styles.permissionsPage}>
        <Text style={[styles.lightText, { marginBottom: 20 }]}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={async () => await Linking.openSettings()}
          title="Grant Permission"
          color="#6b4eff"
        />
      </SafeAreaView>
    );
  }

  const onPictureSaved = async (image) => {
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
      // alert(
      //   `Longitude: ${location.coords.longitude}\nLatitude: ${location.coords.latitude}`
      // );

      const localUri = image.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append("image", { uri: localUri, name: filename, type });
      formData.append("latitude", location.coords.latitude);
      formData.append("longitude", location.coords.longitude);
      formData.append("filename", filename);
      formData.append("user_id", email);
      const response = await postDataMultiForm("detect-pothole", formData);
      if (response.error) {
        console.log("ERROR: " + response.error);
      } else {
        console.log(response);
      }
    }
  };

  const takePicture = () => {
    if (cameraRef.current && cameraRef) {
      cameraRef.current
        .takePictureAsync()
        .then(onPictureSaved)
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <Camera style={styles.camera} type={CameraType.back} ref={cameraRef}>
        <TransparentHeader text="Capture" navigation={navigation} />
        <View style={styles.buttonContainer}>
          <View style={styles.transparentFooter} />
          <View
            style={[
              { marginBottom: Math.max(insets.bottom, 15) },
              styles.buttonOuter,
            ]}
          >
            <TouchableOpacity
              onPress={auto ? () => setAuto(false) : takePicture}
              style={auto ? styles.buttonInnerAuto : styles.buttonInner}
              activeOpacity={0.9}
              onLongPress={() => setAuto(true)}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
}

export default CameraPage;
