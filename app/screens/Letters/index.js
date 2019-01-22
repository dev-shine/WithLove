import React, {Component} from 'react';
import { Text, View} from 'react-native';
import styles from './styles';


class Letters extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Letters Screen</Text>
        </View>
      );
    }
  }
export default Letters;
