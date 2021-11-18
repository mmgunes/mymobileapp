import React, {useState} from 'react';
import IconFt from 'react-native-vector-icons/Fontisto';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default function FlatListScreen() {
  let initTodoList = [
    {title: 'RN Çalış', complate: false},
    {title: 'Spora git', complate: true},
    {title: 'Kitap Oku', complate: true},
    {title: 'Elbise al', complate: false},
  ];

  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState(initTodoList);

  itemSeperatorComponent = () => {
    return <View style={{margin: 5, height: 1, width:'100%', backgroundColor:'#ccc'}} />;
  };

  RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => UpdateTodo(item, index)} // Bu şekilde çalışmaz onPress={UpdateTodo(todo, index)}
        onLongPress={() => DeleteTodo(item, index)}
        key={index.toString()}
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 60,
          borderColor: item.complate ? 'green' : 'red',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 20,
          //justifyContent: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>{item.title}</Text>
        <IconFt
          name={item.complate ? 'checkbox-active' : 'checkbox-passive'}
          size={32}
          color={item.complate ? 'green' : 'red'}></IconFt>
      </TouchableOpacity>
    );
  };

  const AddTodo = () => {
    let data = {title: todoTitle, complate: false};
    let newList = todoList;
    newList.push(data);
    setTodoList(newList);
    setTodoTitle('');
  };

  //Bu fonksiyonla alttaki Delete Fonk Aynı yazımı farklı

  UpdateTodo = (todo, index) => {
    let newList = [];
    todoList.map((item, i) => {
      i == index
        ? newList.push({title: item.title, complate: !item.complate})
        : newList.push(item);
    });
    setTodoList(newList);
  };

  // Map ve Foreach birbirinin yerine kullanabirsin
  DeleteTodo = (todo, index) => {
    let newList = [];
    todoList.forEach((item, i) => {
      if (i != index) {
        newList.push(item);
      }
    });
    setTodoList(newList);
  };

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
      <Text>Silmek için uzun basın</Text>
      <View
        style={{
          flex: 3,
          width: '100%',
        }}>
        <FlatList
          style={{flex: 1, width: '100%'}}
          data={todoList}
          itemSeperatorComponent={itemSeperatorComponent} //itemSeperatorComponent,keyExtractor ve RenderItem biz oluşturduk
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity
        onPress={() => AddTodo()}
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
