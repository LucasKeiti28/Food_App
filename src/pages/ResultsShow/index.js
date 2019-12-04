import React from "react";

import { SafeAreaView, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const ResultsShow = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <SafeAreaView>
      <Text>Results Show {id}</Text>
    </SafeAreaView>
  );
};

export default ResultsShow;

const styles = StyleSheet.create({});
