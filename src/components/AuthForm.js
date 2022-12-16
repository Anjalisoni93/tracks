import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text
          style={styles.errorMessage}>{state.errorMessage}
        </Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthForm;