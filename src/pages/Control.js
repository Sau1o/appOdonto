import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Control = ({navigation}) => {
  //const pass = 'OdontoApp2021';
  const pass = '123';
  const [password, setPassword] = useState('');
  const [nameRoom, setNameRoom] = useState('');

  const startGame = async () => {
    //console.log(`startGame :: senha: ${password}, sala: ${nameRoom}`);
    if (password === pass) {
      firestore()
        .collection('sala')
        .doc(nameRoom)
        .set({})
        .then(() => {
          console.log('User added!');
        });
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
