/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Text, View} from 'react-native';

import {styles} from './style';

export default App = () => {
  return (
    <View style={styles.container}>
      {/*Ortalama / <Text style={{textAlign: 'center'}}>MERHABA REACT NATİVE</Text> */}
      <View style={styles.header}>
        <Text style={styles.textStyle}>HEADER KISMI</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.side}>
          <Text style={styles.textStyle}> SİDE BAR</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textStyle}>MAİN KISMI</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textStyle}>FOOTER KISMI</Text>
      </View>
    </View>
  );
};
