import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Control = ({navigation}) => {
  //const pass = 'OdontoApp2021';
  const pass = '123';
  const [password, setPassword] = useState('');
  const [nameRoom, setNameRoom] = useState('');

  const sortAsks = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var i, j, k;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = array[i];
      array[i] = array[j];
      array[j] = k;
    }
    return array.slice(0, 10);
  };

  const startGame = async () => {
    //console.log(`startGame :: senha: ${password}, sala: ${nameRoom}`);
    if (password === pass) {
      const indices = sortAsks();
      //console.log(`startGame :: ${indices}`);
      const asks = await firestore().collection('quiz').get();
      //const ask = {...asks.docs[1].data()};
      //console.log(user);
      for (var i = 0; i <= 9; i++) {
        //console.log(indices[i]);
        await firestore()
          .collection(nameRoom)
          //.doc(nameRoom)
          .add({...asks.docs[indices[i]].data()});
        //.then(() => {
        //console.log(`Ask ${i} added!`);
        //});
      }
      navigation.navigate('Scores', {isAdm: true});
    } else {
      // eslint-disable-next-line no-alert
      alert('Senha incorreta, tente novamente');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="Senha do Administrador"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          label="Nome da Sala"
          value={nameRoom}
          onChangeText={text => setNameRoom(text)}
        />

        <Button mode="contained" onPress={startGame} color="#2980b9">
          Criar Sala
        </Button>

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}
          color="#2980b9">
          Cancelar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 10,
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },
  form: {
    //flex: 1,
  },
  input: {
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
  },
});
export default Control;
