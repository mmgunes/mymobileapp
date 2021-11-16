import React, {useState} from 'react';
import IconFt from 'react-native-vector-icons/Fontisto';

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
  let initTodoList = [
    {title: 'RN Çalış', complate: false},
    {title: 'Spora git', complate: true},
    {title: 'Kitap Oku', complate: true},
    {title: 'Elbise al', complate: false},
  ];

  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState(initTodoList);

  const addTodo = () =>{
    let data={title:todoTitle, complate: false};
    let newList= todoList;
    newList.push(data);  
    setTodoList(newList);
    setTodoTitle('');
   } 

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
          value={todoTitle}
          onChangeText={setTodoTitle}
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
        <ScrollView style={{flex: 1, width: '100%'}}>
          {todoList.map((todo, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={{
                flexDirection: 'row',
                width: '65%',
                height: 60,
                borderColor: todo.complate ? 'green' : 'red',
                borderWidth: 1,
                margin: 10,
                padding: 10,
                borderRadius: 20,
                //justifyContent: 'center',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
              <Text>{todo.title}</Text>
              <IconFt 
              name= {todo.complate ? 'checkbox-active' : 'checkbox-passive'}
               size={32}
               color={todo.complate ? 'green' : 'red'}></IconFt>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
      onPress={()=>addTodo()}
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          // right:'50%', marginRight:-30 verilir Çünkü width 60 yarısı -30 tam ortaya
          //Position vermek için
          position: 'absolute',
          right: 30, //sağdan 30 birim boşluk
          bottom: 30, // alttan
        }}>
        <Text style={{color: 'white', fontSize: 42}}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
