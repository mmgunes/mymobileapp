import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Style';

export default function Sayac() {
  
   const [sayi, setSayi] = useState(0)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            setSayi(sayi+1)
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
         onPress={() => {
            setSayi(sayi-1)
          }}
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
