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
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  },

  header: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0',
  },
  main: {
    flexDirection: 'row',
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0',
  },
  side: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  content: {
    flex: 6,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },

  footer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#00f',
  },
});