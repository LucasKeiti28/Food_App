import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Alert } from "react-native";

import SearchBar from "../../components/SearchBar";
import yelp from "../../services/api/yelp";

export default function Search() {
  const [term, setTerm] = useState("");
  // const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchApi(term);
  }, []);

  const searchApi = async searchTerm => {
    console.log("Hello, World!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      Alert.alert("Sorry, something went wrong", "Please, try again later.");
    }
  };

  return (
    <SafeAreaView>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
    </SafeAreaView>
  );
}
