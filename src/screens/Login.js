import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default function Login() {
  const [kAdi, setKadi] = useState('');

  const [kSifre, setKsifre] = useState('');

  const userKontrol = () => {
    if (kAdi == 'mgunes' && kSifre == '123456') {
      alert('Giriş başarılı. HOŞGELDİNİZ');
    } else {
      alert('Kullanıcı adı veya Şifre HATALI !!!');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Kullanıcı Adınız Girin:</Text>
      <TextInput
        value={kAdi}
        onChangeText={setKadi}
        style={styles.textInputStil}></TextInput>
      <Text>Değer : {kAdi}</Text>
      <Text style={styles.text}>PIN KODU GİRİN</Text>
      <TextInput
        value={kSifre}
        onChangeText={setKsifre}
        keyboardType="numeric"
        placeholder="sadece rakam"
        secureTextEntry={true}
        style={styles.textInputStil}></TextInput>
      <Text>Değer : {kSifre}</Text>
      <TouchableOpacity onPress={userKontrol} style={styles.button}>
        <Text style={styles.girisYazi}>GİRİŞ YAP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: '50%',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    color: 'red',
    fontSize: 18,
  },
  girisYazi: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    color: 'black',
    fontSize: 22,
  },
  textInputStil: {
    width: '100%',
    borderColor: 'blue',
    borderWidth: 2,
  },
});
