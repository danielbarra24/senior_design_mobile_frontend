import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

const CreditsPage = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} text={"Your Credits"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>25</Text>
        <Text>Credits</Text>
      </View>
    </View>
  );
};

export default CreditsPage;
