import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

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
      title: "YELP API",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "rgb(220,0,0)"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(navigator);
