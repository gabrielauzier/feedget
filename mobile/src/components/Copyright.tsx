import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { theme } from "../theme";

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feito com ❤ por Gabriel Auzier</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 12,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium,
  },
});
