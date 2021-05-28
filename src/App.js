import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';

const App = () => {
  const [value, setValue] = useState('');
  //const [pontos, setPontos] = useState(0);
  const [i, setI] = useState(0);

  const data = [
    {
      pergunta:
        'Os alimentos ricos em fibras regularizam o funcionamento do intestino. Indique o item cujo alimento contém mais fibra.',
      resposta: [
        'refrigerante',
        'Pastel de carne',
        'batata frita',
        'dogão',
        'legumes assados',
      ],
      certa: 'e',
    },
    {
      pergunta: 'O que é Ortorexia.',
      resposta: [
        'Obsessão pelo consumo de alimentos saudáveis',
        'Transtorno alimentar caracterizado pela perda de apetite',
        'Obsessão em falar de forma correta',
        'Preocupação exagerada em ter um corpo elegante',
        'Distúrbiovalimentar que provoca a vingestão excessiva de alimentos',
      ],
      certa: 'a',
    },
  ];

  //console.log(data);

  const onSave = () => {
    i === 0 ? setI(1) : setI(0);
    if (value === data[i].certa) {
      console.log('correta');
    } else {
      console.log('incorreta');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textAsk}>{data[i].pergunta}</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item
          labelStyle={styles.textAnswer}
          label={data[i].resposta[0]}
          value="a"
        />
        <RadioButton.Item
          labelStyle={styles.textAnswer}
          label={data[i].resposta[1]}
          value="b"
        />
        <RadioButton.Item
          labelStyle={styles.textAnswer}
          label={data[i].resposta[2]}
          value="c"
        />
        <RadioButton.Item
          labelStyle={styles.textAnswer}
          label={data[i].resposta[3]}
          value="d"
        />
        <RadioButton.Item
          labelStyle={styles.textAnswer}
          label={data[i].resposta[4]}
          value="e"
        />
      </RadioButton.Group>
      <Button mode="contained" onPress={onSave}>
        Avançar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textAsk: {
    fontSize: 24,
    textAlign: 'justify',
  },
  textAnswer: {
    fontSize: 24,
  },
});

export default App;
