import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Copyright } from "./Copyright";
import { FeedbackType, feedbackTypes } from "../utils/feedbackTypes";
import { Option } from "./Option";
import { theme } from "../theme";

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  options: {
    width: "100%",
    marginBottom: 48,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
