/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { TabContainer } from './app/navigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabContainer />
      </Provider>
      
    )
  }
}

export default App;