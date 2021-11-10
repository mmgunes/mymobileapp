import React from 'react';
import {Text, View} from 'react-native';

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

      <View style={{backgroundColor: 'yellow'}}>
        {numList.map((num2, indexNo) => (
          <View>
            <Text style={{textAlign: 'center', backgroundColor: 'aqua'}}>
              Rastgele sayı : {num2}
            </Text>

            {/* <Text
            key={indexNo.toString()}
            style={{textAlign: 'center', backgroundColor: 'yellow'}}>
            Rastgele sayı {indexNo + 1} : {num2}
          </Text> */}
          </View>
        ))}
      </View>
    </View>
  );
}
