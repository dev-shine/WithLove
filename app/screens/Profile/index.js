import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';


class Profile extends Component {
  onClickLogout = () => {
    const { navigation } = this.props;
    navigation.popToTop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile Screen</Text>
        <TouchableOpacity onPress={this.onClickLogout} style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Profile;
