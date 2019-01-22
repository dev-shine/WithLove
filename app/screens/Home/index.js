import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styles from './styles';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit Index.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      );
    }
  }
export default Home;
