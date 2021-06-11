import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameRoom, setNameRoom] = useState('');

  const newGame = async () => {
    //console.log('NewGame :: ' + name + ' ' + email);
    if (nameRoom !== '' && name !== '' && email !== '') {
      firestore()
        .collection('Alunos')
        .doc(name)
        .set({
          name,
          email,
          pontos: 0,
        })
        .then(() => {
          console.log('User added!');
        });
      navigation.navigate('Quiz', {name: name, nameRoom: nameRoom});
    } else {
      // eslint-disable-next-line no-alert
      alert('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>QUIZ</Text>
        <Text style={styles.textLogo}>ODONTO</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputName}
          label="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.inputName}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.inputName}
          label="Nome da Sala"
          value={nameRoom}
          onChangeText={text => setNameRoom(text)}
        />

        <Button mode="contained" onPress={newGame} color="#2980b9">
          Iniciar o Jogo
        </Button>

        <TouchableOpacity
          style={styles.buttonAdm}
          onPress={() => {
            navigation.navigate('Control');
          }}>
          <Text style={styles.textAdm}>Clique aqui para abrir uma sala</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#3498db',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  form: {
    flex: 1.5,
  },
  inputName: {
    marginBottom: 5,
  },
  buttonAdm: {
    marginTop: 15,
    alignItems: 'center',
  },
  textAdm: {
    color: 'white',
  },
});

export default Login;
