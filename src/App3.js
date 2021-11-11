import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

export default function App3() {
  
    let sayi = 0;

  const sayiAzalt = () => {
    sayi--;
    console.log(sayi);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            sayi++;
            console.log(sayi);
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            padding: 5,
            width: 100,
            height: 100,
            borderRadius: 100,
            margin: 10,
          }}>
          <Text style={styles.textStyle}>+++</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>SAYI : {sayi}</Text>
        <TouchableOpacity
          onPress={sayiAzalt}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            padding: 5,
            width: 100,
            height: 100,
            borderRadius: 100,
            margin: 10,
          }}>
          <Text style={styles.textStyle}> - - </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
