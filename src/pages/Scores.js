import React from 'react';
import {View, FlatList, Text} from 'react-native';

import {Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Scores = () => {
  const [scores, setScores] = React.useState([]);
  //const [pos, setPos] = React.useState(0);
  const newGame = async () => {
    let querySnapshot;
    querySnapshot = await firestore()
      .collection('Alunos')
      .orderBy('pontos', 'desc')
      .get();

    var entries = querySnapshot.docs.map(documentSnapshot =>
      documentSnapshot.data(),
    );
    //console.log('newGame :: ', entries);
    //return entries;
    setScores(entries);
  };

  console.log('Scores', scores);

  //console.log(scores.findIndex(pos => scores.name === 'oito'));

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
            <Text>
              {scores.findIndex(scores => scores.name === item.name) + 1}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Scores;
