import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";

import SearchBar from "../../components/SearchBar";
import ResultList from "../../components/ResultList";
import useResults from "../../hooks/useResults";

export default function Search(props) {
  const [term, setTerm] = useState("");
  const [searchApi, results] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </SafeAreaView>
  );
}
