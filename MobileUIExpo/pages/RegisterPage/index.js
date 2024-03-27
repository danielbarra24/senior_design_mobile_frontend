import React, { useState } from "react";

import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from "react-native";

import Header from "../../components/Header";
import TextEntry from "../../components/TextEntry";
import MainButton from "../../components/MainButton";
import LightTextButton from "../../components/LightTextButton";
import {
  InputErrorMessage,
  emailRegex,
  nameRegex,
  passwordRegex,
} from "../../util/inputValidation";

import styles from "./styles.module.scss";

import { postData } from "../../util/api";

function PersonalEntry({
  setFirstName,
  setLastName,
  setEmail,
  error,
  firstName,
  lastName,
  email,
  handleContinue,
}) {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoInputContainer}>
        <View style={styles.baseline}>
          <View style={styles.colorlineLeft} />
        </View>
        <TextEntry
          onTextChange={setFirstName}
          name="First Name"
          isError={() => {
            return (
              error == InputErrorMessage.INVALID_NAME ||
              (error == InputErrorMessage.MISSING_INPUT && firstName == "")
            );
          }}
          secure={false}
          value={firstName}
        />
        <TextEntry
          onTextChange={setLastName}
          name="Last Name"
          isError={() => {
            return (
              error == InputErrorMessage.INVALID_NAME ||
              (error == InputErrorMessage.MISSING_INPUT && lastName == "")
            );
          }}
          secure={false}
          value={lastName}
        />
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
          value={email}
        />
        {error === "" ||
        error == InputErrorMessage.INVALID_PASSWORD ||
        error == InputErrorMessage.PASSWORD_MISMATCH ||
        error == InputErrorMessage.MALFORMED_PASSWORD ? null : (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>
      <MainButton onPress={handleContinue} text="Continue" long />
    </View>
  );
}

function PasswordEntry({
  setPassword,
  setConfirmPassword,
  error,
  confirmPassword,
  password,
  openTermsOfService,
  openPrivacyPolicy,
  handleRegister,
  handleBack,
}) {
  return (
    <View style={styles.passwordWrapper}>
      <View style={styles.passwordEntry}>
        <View style={styles.baseline}>
          <View style={styles.colorlineRight} />
        </View>
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
        <TextEntry
          onTextChange={setConfirmPassword}
          name="Confirm Password"
          isError={() => {
            return (
              error == InputErrorMessage.PASSWORD_MISMATCH ||
              (error == InputErrorMessage.MISSING_INPUT &&
                confirmPassword == "")
            );
          }}
          secure={true}
        />
        {error === "" ? null : <Text style={styles.errorText}>{error}</Text>}
      </View>
      <View style={styles.passwordBottom}>
        <Text style={styles.lightText}>
          By clicking continue, you agree to our{" "}
          <Text style={styles.lightTextPurple} onPress={openTermsOfService}>
            Terms of Service{" "}
          </Text>
          and{" "}
          <Text style={styles.lightTextPurple} onPress={openPrivacyPolicy}>
            Privacy Policy
          </Text>
          .
        </Text>
        <MainButton onPress={handleRegister} text="Register" long />
        <LightTextButton onPress={handleBack} text="Back" />
      </View>
    </View>
  );
}

function checkPersonal(firstName, lastName, email, setError) {
  if (email === "" || firstName === "" || lastName === "") {
    setError(InputErrorMessage.MISSING_INPUT);
    return false;
  } else if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    setError(InputErrorMessage.INVALID_NAME);
    return false;
  } else if (!emailRegex.test(email)) {
    setError(InputErrorMessage.INVALID_EMAIL);
    return false;
  }
  return true;
}

function checkPassword(password, confirmPassword, setError) {
  if (password === "" || confirmPassword === "") {
    setError(InputErrorMessage.MISSING_INPUT);
    return false;
  } else if (!passwordRegex.test(password)) {
    setError(InputErrorMessage.MALFORMED_PASSWORD);
    return false;
  } else if (password !== confirmPassword) {
    setError(InputErrorMessage.PASSWORD_MISMATCH);
    return false;
  }
  return true;
}

function RegisterPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (checkPersonal(firstName, lastName, email, setError)) {
      setError("");
      setPage(1);
    }
  };

  const handleRegister = async () => {
    if (checkPassword(password, confirmPassword, setError)) {
      res = await postData("signup", {
        username: email,
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
      });
      console.log(res);
      if (res.error) {
        setError(InputErrorMessage.EMAIL_ALREADY_EXISTS);
      } else {
        setError("");
        navigation.navigate("Login");
      }
    }
  };

  url = "https://www.google.com";

  const openTermsOfService = () => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const openPrivacyPolicy = () => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardWrapper}
      >
        <Header navigation={navigation} text="Register" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {page === 0 ? (
            <PersonalEntry
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              error={error}
              firstName={firstName}
              lastName={lastName}
              email={email}
              handleContinue={handleContinue}
            />
          ) : (
            <PasswordEntry
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              error={error}
              confirmPassword={confirmPassword}
              password={password}
              openTermsOfService={openTermsOfService}
              openPrivacyPolicy={openPrivacyPolicy}
              handleRegister={handleRegister}
              handleBack={() => setPage(0)}
            />
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterPage;
