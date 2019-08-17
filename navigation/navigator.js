import React from 'react';
import { View, StatusBar } from 'react-native';
import { AppLoading } from 'expo'; // requirement for using native-base in expo
import * as Font from 'expo-font' // fix import fonts
// import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import AppContainer from './main_navigation';
import store from '../store/create_store';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isReady: false,
    };
  }
      
  // required to load native-base font in expo
  // async componentDidMount() {
    // await Font.loadAsync({
    // // 'any_name' : require('path_to_your_font_file')      'font1': require('../assets/Quicksand-Regular.ttf'),
    //   'Roboto': require('../assets/fonts/Roboto.ttf'),
    //   'Roboto_medium': require('../assets/fonts/Roboto_medium.ttf'),
    // });

    // this.setState({ fontLoaded: true });
  // }

  async loadAssetsAsync() {
    await Font.loadAsync({
        'Roboto': require('../assets/fonts/Roboto.ttf'),
        'Roboto_medium': require('../assets/fonts/Roboto_medium.ttf'),
      });
  }

  render() {
    if (!this.state.isReady) {
        return (            
          <AppLoading
            startAsync={this.loadAssetsAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />     
        );
      }else{
        return (
          <Provider store = { store }>
            <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
              <AppContainer />
            </View>          
          </Provider>
        );
      }
  }
}