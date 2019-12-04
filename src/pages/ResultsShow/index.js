import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "../../services/api/yelp";

const ResultsShow = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <SafeAreaView>
      <Text> {result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ResultsShow;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
});
