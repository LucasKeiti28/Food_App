import { useEffect, useState } from "react";
import { Alert } from "react-native";

import yelp from "../services/api/yelp";

export default () => {
  // const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchApi("hamburger");
  }, []);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      Alert.alert("Sorry, something went wrong", "Please, try again later.");
    }
  };

  return [searchApi, results];
};
