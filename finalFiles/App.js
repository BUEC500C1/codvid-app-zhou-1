//import react in our code. 
import React, { Component } from 'react';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
//import all the screens we are going to switch 
 
const App = createStackNavigator({
    FirstPage: { screen: FirstPage },
    SecondPage: { screen: SecondPage }, 
    ThirdPage: { screen: ThirdPage }, 
    FourthPage: { screen: FourthPage }, 
    FifthPage: {screen: FifthPage}
  },
  {
    initialRouteName: 'FirstPage',
  }
);

//For react-navigation 3.0+ change it to following
export default createAppContainer(App);
