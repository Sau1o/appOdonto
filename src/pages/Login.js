import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

//import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          color="#2980b9">
          Iniciar o Jogo
        </Button>
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
    flex: 1,
  },
  inputName: {
    marginBottom: 5,
  },
});

export default Login;
