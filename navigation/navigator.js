import React from 'react';
import AppContainer from './main_navigation';
import { AppLoading } from 'expo'; // requirement for using native-base in expo
import * as Font from 'expo-font' // fix import fonts
import { Provider } from 'react-redux';
import store from '../store/create_store';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fontLoading: true, // to load font in expo      
    };
  }  
      
  // required to load native-base font in expo
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('../assets/fonts/Roboto.ttf'),
      'Roboto_medium': require('../assets/fonts/Roboto_medium.ttf'),
    }),
    this.setState({ fontLoading: false });
  }

  render() {
    if (this.state.fontLoading) {
        return (            
          <AppLoading />        
        );
      }else{
        return (
          <Provider store = { store }>
            <AppContainer />          
          </Provider>
        );
      }
  }
}