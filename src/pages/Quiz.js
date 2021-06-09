import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Quiz = ({route, navigation}) => {
  const {name, nameRoom} = route.params;
  //console.log('QUIZ :: ' + name);
  const [value, setValue] = useState('');
  const [pontos, setPontos] = useState(0);
  const [i, setI] = useState(0);
  const [question, setQuestion] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [e, setE] = useState('');
  const [certa, setCerta] = useState('');

  useEffect(() => {
    const loadQuiz = async () => {
      const users = await firestore().collection(nameRoom).get();
      const user = {...users.docs[i].data()};
      //console.log(user);
      setValue('');
      setCerta('');
      setQuestion(user.q);
      setA(user.a);
      setB(user.b);
      setC(user.c);
      setD(user.d);
      setE(user.e);
      setCerta(user.certa);
    };
    loadQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, setPontos]);

  const onSave = async () => {
    if (i <= 9) {
      setI(i + 1);
      if (value === certa) {
        console.log('correta');
        setPontos(pontos + 1);
      } else {
        console.log('incorreta');
      }
    } else {
      console.log('ONSAVE :: ' + pontos);
      // eslint-disable-next-line no-alert
      alert(`${name} você fez ${pontos}/10`);
      firestore()
        .collection('Alunos')
        .doc(name)
        .update({
          pontos,
        })
        .then(() => {
          console.log('User updated!');
        });
      navigation.goBack();
    }
    console.log(`Tela: ${i}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textQuestion}>Questão {i + 1}</Text>
      <Text style={styles.textAsk}>{question}</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item labelStyle={styles.textAnswer} label={a} value="a" />
        <RadioButton.Item labelStyle={styles.textAnswer} label={b} value="b" />
        <RadioButton.Item labelStyle={styles.textAnswer} label={c} value="c" />
        <RadioButton.Item labelStyle={styles.textAnswer} label={d} value="d" />
        <RadioButton.Item labelStyle={styles.textAnswer} label={e} value="e" />
      </RadioButton.Group>
      <Button mode="contained" onPress={onSave}>
        Avançar
      </Button>
      <Text>
        {pontos}/{i}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textQuestion: {
    fontSize: 28,
    color: 'red',
  },
  textAsk: {
    fontSize: 24,
    textAlign: 'justify',
  },
  textAnswer: {
    fontSize: 24,
  },
});

export default Quiz;
