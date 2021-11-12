import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
export default function TextInputKullan() {
  const [sayi, setSayi] = useState('');
  const [faktoriyel, setFaktoriyel] = useState('');

  const getFaktoriyel = sayi => {
    let f = 1;
    for (let i = 1; i <= sayi; i++) {
      f *= i;
    }
    return f;
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        }}>
        <TextInput
          value={sayi}
          onChangeText={value => {
              setSayi(value);
            setFaktoriyel('')
            }}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 70,
            width: '100%',
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setFaktoriyel(getFaktoriyel(sayi))
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            padding: 5,
            width: '100%',
            height: 50,
            borderRadius: 50,
            margin: 10,
          }}>
          <Text style={styles.textStyle}>Hesapla</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 36}}>
          {faktoriyel != '' ? sayi + ' ! =' + faktoriyel : ''}
        </Text>
      </View>
    </SafeAreaView>
  );
}
