'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
  }
  
  onSuccess = e => {
    this.setState({ content : e.data })
  };

  gotIt = _ => {
    this.scanner.reactivate()
   }

  render() {
    const { content } = this.state;
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        ref={(node) => { this.scanner = node }}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <TouchableOpacity onPress={() => Linking.openURL(content)}>
              <Text style={styles.textBold}>{content}</Text>
            </TouchableOpacity>
            {' '}to view data
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.gotIt}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;
