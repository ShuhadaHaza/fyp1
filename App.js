//import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RebarScreen from './src/RebarScreen';
import ResultFetch from './src/components/ResultFetch';

const navigator = createStackNavigator(
    {
    
     
      Rebar : RebarScreen,
      Result : ResultFetch
     
  
    },
  
    {
      initialRouteName: 'Rebar',
      defaultNavigationOptions: {
     title:'Rebar'
      }
    }
  );
  
  export default createAppContainer(navigator);