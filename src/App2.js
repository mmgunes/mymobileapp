import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export default function App() {
  const faktoriyel = sayi => {
    let f = 1;
    for (let i = 1; i <= sayi; i++) {
      f *= i;
    }
    return f;
  };

  let randomSayi = Math.floor(Math.random() * 10);

  const tekmiCiftmi = value => {
    if (value % 2 == 0) {
      return 'Çift Sayıdır';
    } else {
      return 'Tek Sayıdır';
    }
  };

  let numList = [];

  for (let i = 0; i < 10; i++) {
    // numList.push(Math.random() * 100);
    numList.push(Math.floor(Math.random() * 10));
    console.log(numList[i]);
  }

  console.log('***FOREACH***');

  numList.forEach(num => {
    console.log('for each : ' + num);
  });

  console.log('***MAP***');
  numList.map(num => {
    console.log('map : ' + num);
  });

  let todoList = [];

  function rastgeleStringGetir(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 25; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function rastgeleBooleanGetir() {
    let result = true;
    let sayi = Math.floor(Math.random() * 100);

    sayi % 2 == 0 ? (result = true) : (result = false);

    return result;
  }

  for (let i = 0; i < 10; i++) {
    // todoList.push({title: 'Çalış', complate: true});
    todoList.push({
      title: rastgeleStringGetir(),
      complate: rastgeleBooleanGetir(),
    });
  }
  todoList.map(todo => {
    //console.log(todo);
    console.log('Title : ' + todo.title + ', Complate: ' + todo.complate);
  });

  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text>
        Random Sayı : {randomSayi} ! = {faktoriyel(randomSayi)}
      </Text>
      <Text style={{backgroundColor: 'green'}}>
        Random Sayı : {randomSayi} bir{tekmiCiftmi(randomSayi)}
      </Text>
      <Text>
        İf Kısayolu Random Sayı :{' '}
        {randomSayi % 2 == 0
          ? randomSayi + ' Çift Sayıdır'
          : randomSayi + ' Tek Sayıdır'}
      </Text>

      {numList.map((num2, indexNo) => (
        <Text key={indexNo.toString()} style={styles.textStyle}>
          Rastgele sayı {indexNo + 1} : {num2}
        </Text>
      ))}

      {todoList.map((todo, indexNo) => (
        <Text
          key={indexNo.toString()}// key={todo.title} 
          style={{textAlign: 'center', backgroundColor: 'aqua'}}>
          Rastgele metin  : {todo.title} Rastgele Boolean {todo.complate.toString()}
        </Text>
      ))}
    </View>
  );
}
