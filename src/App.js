/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Text, View} from 'react-native';

import { styles } from './style';


export default App = () => {
  return (
    <View style={styles.container}>
     {/*Ortalama / <Text style={{textAlign: 'center'}}>MERHABA REACT NATİVE</Text> */}
    <Text style={styles.textStyle}>YAZI 1 </Text>
    <Text>YAZI 2 </Text>
    <Text style={styles.textStyle}>YAZI 3 </Text>
    <Text>YAZI 4 </Text>
    </View>
  );
};
