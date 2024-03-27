import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Header from "../../components/Header";

import styles from "./styles.module.scss";
import { useData } from "../../util/api";
import { useSelector } from "react-redux";
import { selectEmail } from "../../store/emailSlice";

const CreditsPage = ({ navigation }) => {
  const email = useSelector(selectEmail);
  const response = useData(`user_data?username=${email}`);

  if (response === null || response.error) {
    if (response != null && response.error) {
      console.log(response.error);
    } else {
      console.log("Loading...");
    }
    return <View />;
  }
  const credits = response.data.credits;
  return (
    <SafeAreaView style={styles.screen}>
      <Header navigation={navigation} text={"Your Credits"} />
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.count}>{credits}</Text>
          <Text style={styles.credits}>Credits</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreditsPage;
