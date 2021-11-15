import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {styles} from './style';

export default function ToDoList() {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          width: '100%', //Verilmezse Text Input 100% gözükmez
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 70,
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
        }}>
        <Text> Kayıt Listesi</Text>
      </View>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:30,
          
          //Position vermek için
          position:'absolute',
          right:30,//sağdan 30 birim boşluk
          bottom:30 // alttan 
        }}>
        <Text style={{color: 'white', fontSize: 42}}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
