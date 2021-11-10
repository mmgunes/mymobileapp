import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
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
      {numList.map((num2, indexNo) => (
        <View>
          <Text style={{textAlign: 'center', backgroundColor: 'aqua'}}>
            Rastgele sayı  : {num2}
          </Text>

          {/* <Text
            key={indexNo.toString()}
            style={{textAlign: 'center', backgroundColor: 'yellow'}}>
            Rastgele sayı {indexNo + 1} : {num2}
          </Text> */}
        </View>
      ))}
    </View>
  );
}
