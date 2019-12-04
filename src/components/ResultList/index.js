import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
