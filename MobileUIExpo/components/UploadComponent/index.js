import React, { useState } from "react";
import { Text, Image, View, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";

import MainButton from "../MainButton";

import styles from "./styles.module.scss";

const uploadImage = require("../../assets/images/Upload_Icon.png");
const removeImageIcon = require("../../assets/images/X_Button.png");

function UploadButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={uploadImage}
        style={styles.uploadIcon}
        resizeMode="contain"
      />
      <Text style={styles.midText}>Upload a Photo</Text>
    </Pressable>
  );
}

function UploadComponent({ processImage }) {
  const [image, setImage] = useState(null);

  const deleteImage = () => {
    setImage(null);
  };

  const onConfirm = () => {
    processImage(image);
    setImage(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return image === null ? (
    <UploadButton onPress={pickImage} />
  ) : (
    <View style={styles.uploadComponentWrapper}>
      <View style={styles.uploadedImageWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.uploadedImage}
          resizeMode="cover"
        />
        <Pressable onPress={deleteImage} style={styles.removeImageButton}>
          <Image
            source={removeImageIcon}
            style={styles.removeImageIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.confirmButtonWrapper}>
        <MainButton onPress={onConfirm} long text="Confirm" />
      </View>
    </View>
  );
}

export default UploadComponent;
