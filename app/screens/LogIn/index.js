import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import styles from './styles';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  onClickLogin = () => {
    const { logIn } = this.props;
    logIn(this.state)
    
  }
  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;
    if (nextProps.isLoggedIn !== this.props.isLoggedIn) {
      if (nextProps.isLoggedIn === true) {
        navigation.navigate('Main');
      } 
    }
    if (nextProps.errors !== this.props.errors) {
      Alert.alert('Alert', JSON.stringify(nextProps.errors) )
    }
  }
  onClickRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              onChangeText={(email) => this.setState({email})}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              onChangeText={(password) => this.setState({password})}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onClickLogin} style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onClickRegister} style={styles.buttonContainer}>
            <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/instagram/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Sign in with instagram</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

