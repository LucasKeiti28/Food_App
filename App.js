import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Search from "./src/pages/Search";
import ResultsShow from "./src/pages/ResultsShow";

const navigator = createStackNavigator(
  {
    Search,
    ResultsShow
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
