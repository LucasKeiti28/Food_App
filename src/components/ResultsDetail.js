import React from "react";

import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const components = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default components;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  }
});
