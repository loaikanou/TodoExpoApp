import * as React from 'react';
// import * as Font from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import ToDoAll from '../containers/todo_all';

class AllToDo extends React.Component {   
  render() {    
    return (
      <ToDoAll show_new_todo = { true } screen = "All" />
    )
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Active" />
    )
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Completed" />
    )
  }
}

const MaterialBottomTabNavigator = createMaterialTopTabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo }
},{
  // navigationOptions: ({ navigation }) => ({
    // tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //   const { routeName } = navigation.state;
    //   let iconName
    //   if (routeName === 'All') {
    //     iconName = 'facebook'
    //   } else if (routeName === 'Active') {
    //     iconName = 'facebook'
    //   } else{
    //     iconName = 'facebook'
    //   }
    //   return <FontAwesome name={iconName}  size={horizontal ? 20 : 25} color={tintColor} active={ focused } />;
    // },
  // }),
  tabBarOptions: {
    activeTintColor: '#0066cc',
    inactiveTintColor: 'gray',
    showLabel: true,
    // showIcon: true,
    upperCaseLabel: true,
    scrollEnabled: false,
    // tabStyle: {

    // },
    // labelStyle: {

    // },
    // iconStyle: {

    // },
    style: {
      backgroundColor: '#eee',
    },
    indicatorStyle: {
      backgroundColor: '#0066cc',
    },
  },
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true
})

const AppContainer = createAppContainer(MaterialBottomTabNavigator);

export default AppContainer;
