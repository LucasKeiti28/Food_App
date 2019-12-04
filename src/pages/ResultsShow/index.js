import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  View
} from "react-native";

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
      <View style={styles.container}>
        <Text style={styles.title}> {result.name} </Text>
      </View>
      <FlatList
        data={result.photos}
        showsVerticalScrollIndicator={false}
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
  container: {
    backgroundColor: "#ddd"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 5
  }
});
