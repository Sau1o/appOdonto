import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import {Button} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const Scores = ({route}) => {
  const {isAdm} = route.params;
  //console.log('Scores :: ', isAdm);
  const [scores, setScores] = useState([]);
  //const [pos, setPos] = React.useState(0);

  useEffect(() => {
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
    newGame();
  }, [scores]);

  //console.log('Scores', scores);

  //console.log(scores.findIndex(pos => scores.name === 'oito'));

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Pos</Text>

        <Text style={styles.text}>Nome</Text>

        <Text style={styles.text}>Email</Text>

        <Text style={styles.text}>Pontos</Text>
      </View>
      <FlatList
        data={scores}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <Text style={styles.text}>
              {scores.findIndex(scores => scores.name === item.name) + 1}
            </Text>

            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.text}>{item.email}</Text>

            <Text style={styles.text}>{item.pontos}</Text>
          </View>
        )}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        disabled={isAdm ? false : true}>
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 1,
    marginBottom: 10,
    textAlignVertical: 'center',
    borderTopWidth: 1,
  },
});

export default Scores;
