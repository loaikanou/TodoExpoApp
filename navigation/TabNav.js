import * as React from 'react';
import ToDoAll from '../containers/todo_all'
import TabBar from "@mindinventory/react-native-tab-bar-interaction";

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

export default function TabNav() {
    <TabBar>
        <TabBar.Item
            icon={require('../assets/icons/_ionicons_svg_ios-list.svg')}
            selectedIcon={require('../assets/icons/_ionicons_svg_md-list.svg')}
            title="Tab1"
            screenBackgroundColor={{ backgroundColor: '#008080' }}
        >
            <AllToDo />
        </TabBar.Item>
        <TabBar.Item
            icon={require('../assets/icons/_ionicons_svg_ios-list.svg')}
            selectedIcon={require('../assets/icons/_ionicons_svg_md-list.svg')}
            title="Tab2"
            screenBackgroundColor={{ backgroundColor: '#F08080' }}
        >
            <ActiveToDo />
        </TabBar.Item>
        <TabBar.Item
            icon={require('../assets/icons/_ionicons_svg_ios-list.svg')}
            selectedIcon={require('../assets/icons/_ionicons_svg_md-list.svg')}
            title="Tab3"
            screenBackgroundColor={{ backgroundColor: '#485d72' }}
        >
            <CompletedToDo />
        </TabBar.Item>
    </TabBar>
}