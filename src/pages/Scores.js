import React from 'react';
import {View} from 'react-native';

import {Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Scores = () => {
  const newGame = async () => {
    let querySnapshot;
    querySnapshot = await firestore()
      .collection('Alunos')
      .orderBy('pontos', 'desc')
      .get();

    let entries = querySnapshot.docs.map(documentSnapshot =>
      documentSnapshot.data(),
    );
    console.log(entries);
  };
  return (
    <View>
      <Button mode="contained" onPress={newGame} color="#2980b9">
        Iniciar o Jogo
      </Button>
    </View>
  );
};

export default Scores;
