import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack'; 
import SearchScreen from './src/screens/SearchScreen'; 
import ResultsShowScreen from './src/screens/ResultsShowScreen'; 

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen
}, {
  intialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search Screen"
  }
});

export default createAppContainer(navigator); 