import React from 'react';
import {View, FlatList, Text} from 'react-native';

import {Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Scores = () => {
  const [scores, setScores] = React.useState([]);
  const newGame = async () => {
    let querySnapshot;
    querySnapshot = await firestore()
      .collection('Alunos')
      .orderBy('pontos', 'desc')
      .get();

    var entries = querySnapshot.docs.map(documentSnapshot =>
      documentSnapshot.data(),
    );
    console.log('newGame :: ', entries);
    //return entries;
    setScores(entries);
  };

  console.log('Scores', scores);

  return (
    <View>
      <Button mode="contained" onPress={newGame} color="#2980b9">
        Iniciar o Jogo
      </Button>
      <FlatList
        data={scores}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Scores;
