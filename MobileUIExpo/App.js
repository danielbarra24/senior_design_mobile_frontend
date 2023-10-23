import React from "react";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import UploadPhotoPage from "./pages/UploadPhotoPage";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Upload" component={UploadPhotoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

// import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';

// // You can import supported modules from npm
// import { Card } from 'react-native-paper';

// // or any files within the Snack
// import AssetExample from './components/AssetExample';

// export default function App() {
//   const handleLogin = () => {
//     alert('Login Pressed')
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>
//         PotholePros
//       </Text>
//       <Image />
//       <Text>
//         Find Potholes,\n
//         Get Paid
//       </Text>
//       <TouchableOpacity onPress={handleLogin} style = {styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     backgroundColor: '#FFFFF',
//     // padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//     button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   /* Walkthrough */

// text: {
//   position: 'absolute',
//   height: "32px",
//   left: "116px",
//   right: "116px",
//   top: "76px",
//   font_family: 'Inter',
//   font_weight: 700,
//   font_size: "24px",
//   line_height: "32px",
//   /* or 133% */
//   text_align: 'center',
//   color: 'red',
// }});

//  /* Walkthrough */

// // position: absolute;
// // width: 375px;
// // height: 812px;
// // left: 0px;
// // top: 0px;

// // /* Sky/White */
// // background: #FFFFFF;
// // border-radius: 32px;

// // /* Find Potholes, Get Paid */

// // position: absolute;
// // width: 327px;
// // height: 64px;
// // left: calc(50% - 327px/2);
// // top: calc(50% - 64px/2 + 142px);

// // font-family: 'Inter';
// // font-style: normal;
// // font-weight: 700;
// // font-size: 24px;
// // line-height: 32px;
// // /* or 133% */
// // text-align: center;

// // /* Ink/Darkest */
// // color: #090A0A;

// /* PotholePros */

// // position: absolute;
// // height: 32px;
// // left: 115px;
// // right: 116px;
// // top: 76px;

// // /* /Title3 */
// // font-family: 'Inter';
// // font-style: normal;
// // font-weight: 700;
// // font-size: 24px;
// // line-height: 32px;
// // /* identical to box height, or 133% */
// // text-align: center;

// // /* Ink/Darkest */
// // color: #090A0A;

// // /* Controls / Buttons */

// // /* Auto layout */
// // display: flex;
// // flex-direction: row;
// // align-items: flex-start;
// // padding: 16px 32px;
// // gap: 10px;

// // position: absolute;
// // width: 208px;
// // height: 48px;
// // left: calc(50% - 208px/2 - 0.5px);
// // bottom: 152px;

// // /* Primary/Base */
// // background: #6B4EFF;
// // border-radius: 48px;

// // /* Text */

// // width: 144px;
// // height: 16px;

// // /* Regular/None/Medium */
// // font-family: 'Inter';
// // font-style: normal;
// // font-weight: 500;
// // font-size: 16px;
// // line-height: 16px;
// // /* identical to box height, or 100% */
// // display: flex;
// // align-items: center;
// // text-align: center;

// // /* Sky/White */
// // color: #FFFFFF;

// // /* Inside auto layout */
// // flex: none;
// // order: 0;
// // flex-grow: 0;

// // /* Don’t have an account? Sign Up */

// // position: absolute;
// // width: 241px;
// // height: 24px;
// // left: calc(50% - 241px/2);
// // bottom: 96px;

// // /* Regular/Normal/Regular */
// // font-family: 'Inter';
// // font-style: normal;
// // font-weight: 400;
// // font-size: 16px;
// // line-height: 24px;
// // /* identical to box height, or 150% */
// // text-align: center;

// // /* Ink/Darker */
// // color: #202325;

// // /* PotholePros */

// // position: absolute;
// // height: 32px;
// // left: 115px;
// // right: 116px;
// // top: 76px;

// // /* /Title3 */
// // font-family: 'Inter';
// // font-style: normal;
// // font-weight: 700;
// // font-size: 24px;
// // line-height: 32px;
// // /* identical to box height, or 133% */
// // text-align: center;

// // /* Ink/Darkest */
// // color: #090A0A;

// // /* Group 1 */

// // position: absolute;
// // width: 69px;
// // height: 50px;
// // left: 178px;
// // top: 396px;

// // backdrop-filter: blur(2px);
// // /* Note: backdrop-filter has minimal browser support */

// // /* Ellipse 1 */

// // position: absolute;
// // width: 69px;
// // height: 50px;
// // left: 178px;
// // top: 396px;

// // background: #ADA6A6;

// // /* Ellipse 2 */

// // position: absolute;
// // width: 69px;
// // height: 43px;
// // left: 178px;
// // top: 402px;

// // background: #222222;

// // /* Character/_Full Character/Female 8 */

// // position: absolute;
// // width: 192px;
// // height: 264px;
// // left: 8px;
// // top: 176px;

// // /* Character/Head/Female/Bun */

// // position: absolute;
// // left: 33.33%;
// // right: 34.33%;
// // top: 0%;
// // bottom: 75.9%;

// // /* Face */

// // position: absolute;
// // left: 27.84%;
// // right: 19.59%;
// // top: 14%;
// // bottom: -0.19%;

// // background: #D0D0D0;

// // /* Fill 1 */

// // position: absolute;
// // left: 34.09%;
// // right: 31.97%;
// // top: 56.17%;
// // bottom: -0.19%;

// // background: #D0D0D0;

// // /* Fill 3 */

// // position: absolute;
// // left: 32.66%;
// // right: 19.59%;
// // top: 14%;
// // bottom: 32.63%;

// // background: #D0D0D0;

// // /* Fill 5 */

// // position: absolute;
// // left: 29.69%;
// // right: 59.22%;
// // top: 38.81%;
// // bottom: 51.97%;

// // background: #D0D0D0;
// // transform: matrix(0.91, 0.4, -0.41, 0.91, 0, 0);

// // /* Hair */

// // position: absolute;
// // left: -2%;
// // right: 16.34%;
// // top: 5%;
// // bottom: -20.14%;

// // background: #051C2C;

// // /* Rectangle Copy */

// // position: absolute;
// // left: 27.84%;
// // right: 57.73%;
// // top: 35.06%;
// // bottom: 45.94%;

// // background: #6B4EFF;
// // border-radius: 5px;

// // /* Rectangle */

// // position: absolute;
// // left: 29.9%;
// // right: 57.73%;
// // top: 37.06%;
// // bottom: 45.94%;

// // background: #6B4EFF;
// // border-radius: 5px;

// // /* Path 12 */

// // position: absolute;
// // left: 33.89%;
// // right: 28.69%;
// // top: 15.13%;
// // bottom: 64.94%;

// // background: #D8D8D8;

// // /* Character/Legs/Standing/Pants */

// // position: absolute;
// // left: 0%;
// // right: 0%;
// // top: 44.58%;
// // bottom: 0%;

// // /* Shoe */

// // position: absolute;
// // left: 60.67%;
// // right: 20%;
// // top: 87.83%;
// // bottom: 3.04%;

// // /* Skin */

// // position: absolute;
// // left: 6.58%;
// // right: 68.23%;
// // top: -7.16%;
// // bottom: 72.03%;

// // background: #D0D0D0;

// // /* shoe */

// // position: absolute;
// // left: 0%;
// // right: 0.76%;
// // top: 5.56%;
// // bottom: 0%;

// // background: #F0F0F0;

// // /* Combined Shape */

// // position: absolute;
// // left: 33.55%;
// // right: 38.46%;
// // top: 23.78%;
// // bottom: 20.17%;

// // background: #B3B3B3;

// // /* Path 5 */

// // position: absolute;
// // left: 36%;
// // right: 54.75%;
// // top: 20.73%;
// // bottom: 39.03%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Path 5 Copy */

// // position: absolute;
// // left: 44.13%;
// // right: 46.99%;
// // top: 30.29%;
// // bottom: 30%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Path 5 Copy 2 */

// // position: absolute;
// // left: 52.73%;
// // right: 38.22%;
// // top: 40.03%;
// // bottom: 20.49%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Shoe Copy */

// // position: absolute;
// // left: 36%;
// // right: 44.67%;
// // top: 87.83%;
// // bottom: 3.04%;

// // /* Skin */

// // position: absolute;
// // left: 6.58%;
// // right: 68.23%;
// // top: -7.16%;
// // bottom: 72.03%;

// // background: #D0D0D0;

// // /* shoe */

// // position: absolute;
// // left: 0%;
// // right: 0.76%;
// // top: 5.56%;
// // bottom: 0%;

// // background: #F0F0F0;

// // /* Combined Shape */

// // position: absolute;
// // left: 33.55%;
// // right: 38.46%;
// // top: 23.78%;
// // bottom: 20.17%;

// // background: #B3B3B3;

// // /* Path 5 */

// // position: absolute;
// // left: 36%;
// // right: 54.75%;
// // top: 20.73%;
// // bottom: 39.03%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Path 5 Copy */

// // position: absolute;
// // left: 44.13%;
// // right: 46.99%;
// // top: 30.29%;
// // bottom: 30%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Path 5 Copy 2 */

// // position: absolute;
// // left: 52.73%;
// // right: 38.22%;
// // top: 40.03%;
// // bottom: 20.49%;

// // background: #D8D8D8;
// // transform: matrix(0.98, 0.19, -0.19, 0.98, 0, 0);

// // /* Pants */

// // position: absolute;
// // left: 36.67%;
// // right: 33.67%;
// // top: 0%;
// // bottom: 11.29%;

// // background: #6B4EFF;

// // /* Fill 1 */

// // position: absolute;
// // left: 44.22%;
// // right: 33.67%;
// // top: 0%;
// // bottom: 11.7%;

// // background: #051C2C;

// // /* Fill 4 */

// // position: absolute;
// // left: 36.67%;
// // right: 44.52%;
// // top: 0%;
// // bottom: 11.29%;

// // background: #051C2C;

// // /* Belt */

// // position: absolute;
// // left: 38.67%;
// // right: 39%;
// // top: 5.22%;
// // bottom: 87.52%;

// // background: #8D79F7;

// // /* Character/Body/Standing/2 Shirts Long Sleeve */

// // position: absolute;
// // left: 0%;
// // right: 0%;
// // top: 19.04%;
// // bottom: 32.77%;

// // /* Arms */

// // position: absolute;
// // left: 31.25%;
// // right: 11.6%;
// // top: 27.32%;
// // bottom: 21.26%;

// // background: #D0D0D0;

// // /* Right Arm */

// // position: absolute;
// // left: 21.32%;
// // right: 60.28%;
// // top: 36.85%;
// // bottom: 17.91%;

// // background: #D0D0D0;
// // transform: matrix(0.93, -0.36, 0.36, 0.93, 0, 0);

// // /* Left Arm */

// // position: absolute;
// // left: 82.96%;
// // right: 7.37%;
// // top: 40.26%;
// // bottom: 34.72%;

// // background: #D0D0D0;
// // transform: matrix(-0.94, 0.34, 0.34, 0.94, 0, 0);

// // /* Shirt */

// // position: absolute;
// // left: 31.29%;
// // right: 17.51%;
// // top: 0.02%;
// // bottom: 37.41%;

// // /* Palette/Deep Blue */
// // background: #051C2C;

// // /* Shirt */

// // position: absolute;
// // left: 38.37%;
// // right: 34.54%;
// // top: -0.55%;
// // bottom: 42.13%;

// // background: #00A9F4;
// // transform: matrix(1, 0.05, -0.05, 1, 0, 0);

// // /* Right Sleeve */

// // position: absolute;
// // left: 31.29%;
// // right: 58.54%;
// // top: 1.38%;
// // bottom: 37.41%;

// // background: #00A9F4;

// // /* Left Sleeve */

// // position: absolute;
// // left: 56.64%;
// // right: 17.51%;
// // top: 1.97%;
// // bottom: 45%;

// // background: #00A9F4;

// // /* Combined Shape */

// // position: absolute;
// // left: 37.51%;
// // right: 56.9%;
// // top: 23.4%;
// // bottom: 42.01%;

// // background: rgba(0, 0, 0, 0.2);

// // /* Fill 1 */

// // position: absolute;
// // left: 37.54%;
// // right: 55.69%;
// // top: 23.27%;
// // bottom: 42.49%;

// // background: rgba(0, 0, 0, 0.2);
// // transform: matrix(1, 0.05, -0.05, 1, 0, 0);

// // /* Right Sleeve */

// // position: absolute;
// // left: 31.29%;
// // right: 58.54%;
// // top: 1.38%;
// // bottom: 37.41%;

// // background: #00A9F4;

// // /* Rectangle 1 */

// // position: absolute;
// // width: 22px;
// // height: 10px;
// // left: 164px;
// // top: 298px;

// // background: #D9D9D9;

// // /* Ellipse 3 */

// // position: absolute;
// // width: 2px;
// // height: 2px;
// // left: 183px;
// // top: 305px;

// // background: #FDF292;
