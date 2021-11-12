import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import IconFa from 'react-native-vector-icons/FontAwesome';

export default HariciPaketIcon = () => {
  return (
    <View
      style={{flex: 1, backgroundColor:'yellow', alignItems: 'center', justifyContent: 'center'}}>


        <IconFa name="car" size={50} color="black" />
        <Text>Harici Paket Yükleme </Text>
        {/* Komutu çalıştır: npx react-native link react-native-vector-icons 
        ikonların doğru yüklenmesi için gerekli  */}
        <ActivityIndicator size="large" color="#0000ff" />

    </View>
  );
};
