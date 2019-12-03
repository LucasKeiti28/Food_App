import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Search from "./src/pages/Search";

const navigator = createStackNavigator(
  {
    Search
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
