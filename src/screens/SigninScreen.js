import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  return (
    <View>
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage=""
        onSubmit={() => {}}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Sign Up instead"
        routeName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;