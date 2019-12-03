import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Alert } from "react-native";

import SearchBar from "../../components/SearchBar";
import useResults from "../../hooks/useResults";

export default function Search() {
  const [term, setTerm] = useState("");
  const [searchApi, results] = useResults();

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
