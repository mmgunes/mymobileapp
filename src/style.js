import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
    //  justifyContent: 'center', //'flex-end'
    justifyContent: 'space-between', // İçeriğe göre Otomatik boşluk verir yatay veya dikey hangisi belirtilmişse

    flexDirection: 'column', // 'column' Varsayılanıdır flexDirection:'column'
    backgroundColor: 'purple',
  },
  
  textStyle: {
      color: '#fff',
  }
});
