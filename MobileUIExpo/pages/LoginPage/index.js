import React, { useState } from "react";

import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "../../components/Header";
import TextEntry from "../../components/TextEntry";
import MainButton from "../../components/MainButton";
import {
  InputErrorMessage,
  emailRegex,
  passwordRegex,
} from "../../util/inputValidation";

import { postData } from "../../util/api";

import styles from "./styles.module.scss";

import { useDispatch } from "react-redux";
import { setEmail as setEmailRedux } from "../../store/emailSlice";

function LoginEntry({
  setEmail,
  setPassword,
  error,
  email,
  password,
  handleForgotPassword,
}) {
  return (
    <View style={styles.loginContainer}>
      <TextEntry
        onTextChange={setEmail}
        name="Email"
        isError={() => {
          return (
            error == InputErrorMessage.INVALID_EMAIL ||
            (error == InputErrorMessage.MISSING_INPUT && email == "")
          );
        }}
        secure={false}
      />
      <TextEntry
        onTextChange={setPassword}
        name="Password"
        isError={() => {
          return (
            error === InputErrorMessage.INVALID_PASSWORD ||
            error === InputErrorMessage.MALFORMED_PASSWORD ||
            (error === InputErrorMessage.MISSING_INPUT && password === "")
          );
        }}
        secure={true}
      />
      <Text style={styles.lightTextPurple} onPress={handleForgotPassword}>
        Forgot your password?{" "}
      </Text>
      {error === "" ? null : <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

function LoginSubmission({ handleLogin, handleRegister }) {
  return (
    <View style={styles.loginSubmission}>
      <Text style={styles.lightText}>
        Don't have an account?{" "}
        <Text style={styles.lightTextPurple} onPress={handleRegister}>
          Register Here
        </Text>
      </Text>
      <MainButton onPress={handleLogin} text="Login" long />
    </View>
  );
}

async function checkInput(email, password, setError) {
  if (email === "" || password === "") {
    setError(InputErrorMessage.MISSING_INPUT);
    return false;
  } else if (!emailRegex.test(email)) {
    setError(InputErrorMessage.INVALID_EMAIL);
    return false;
  } else if (!passwordRegex.test(password)) {
    setError(InputErrorMessage.INVALID_PASSWORD);
    return false;
  }
  loginAttempt = await postData("login", {
    username: email.toLowerCase(),
    password: password,
  });

  console.log("here: " + loginAttempt);

  if (loginAttempt.error && loginAttempt.error.status === 401) {
    setError(InputErrorMessage.INVALID_PASSWORD);
    return false;
  } else if (loginAttempt.error) {
    setError(InputErrorMessage.GENERAL);
    return false;
  }
  return true;
}

function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (await checkInput(email, password, setError)) {
      setError("");
      dispatch(setEmailRedux(email));
      navigation.navigate("Home");
    }
  };

  const handleForgotPassword = () => {
    alert("forgot password");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardWrapper}
      >
        <Header text="Login" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <LoginEntry
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
              handleForgotPassword={handleForgotPassword}
              email={email}
              password={password}
            />
            <LoginSubmission
              handleLogin={handleLogin}
              handleRegister={handleRegister}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginPage;
