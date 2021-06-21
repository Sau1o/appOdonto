import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

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

      <View style={styles.container}>
        <Text style={styles.itemPos}>Pos</Text>

        <Text style={styles.itemName}>Nome</Text>

        <Text style={styles.itemMail}>Email</Text>

        <Text style={styles.itemPontos}>Pontos</Text>
      </View>

      <FlatList
        data={scores}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <Text style={styles.itemPos}>
              {scores.findIndex(scores => scores.name === item.name) + 1}
            </Text>

            <Text style={styles.itemName}>{item.name}</Text>

            <Text style={styles.itemMail}>{item.email}</Text>

            <Text style={styles.itemPontos}>{item.pontos}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
  },
  itemPos: {flex: 1},
  itemName: {flex: 1},
  itemMail: {flex: 1},
  itemPontos: {flex: 1},
});

export default Scores;
