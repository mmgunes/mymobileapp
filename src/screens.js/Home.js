import React from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native'

const HomeScreen({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, width:'100%', alignItems: 'center'}}>
            <ScrollView style={{flex:1, width:'100%'}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('ES')}
                style={{
                    flex:1,
                    margin:10,
                    width:'95%',
                    height: 50,
                    alignItems:'center',
                    backgroundColor:'red',
                    justifyContent:'center',
                    borderRadius:30
                }}
                >
            <Text style={{color:'white', fontSize:20}}>ES Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Faktoriyel')}
                style={{
                    flex:1,
                    margin:10,
                    width:'95%',
                    height: 50,
                    alignItems:'center',
                    backgroundColor:'yellow',
                    justifyContent:'center',
                    borderRadius:30
                }}
                >
                    <Text style={{color:'white', fontSize:20}}>FlexBox Screen</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;