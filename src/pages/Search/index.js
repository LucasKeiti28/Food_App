import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";

import SearchBar from "../../components/SearchBar";
import yelp from "../../services/api/yelp";

export default function Search() {
  const [term, setTerm] = useState("");
  // const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "san jose"
      }
    });

    setResults(response.data.businesses);
  };

  return (
    <SafeAreaView>
      <SearchBar term={term} onChangeTerm={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results</Text>
    </SafeAreaView>
  );
}
