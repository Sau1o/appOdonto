import React from 'react';
import {View, Text} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';

const App = () => {
  const [value, setValue] = React.useState('');
  const data = [
    'Alternativa a',
    'Alternativa b',
    'Alternativa c',
    'Alternativa d',
    'Alternativa e',
  ];

  return (
    <View>
      <Text>
        Os alimentos ricos em fibras regularizam o funcionamento do intestino.
        Indique o item cujo alimento contém mais fibra.
      </Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item label={data[0]} value="a" />
        <RadioButton.Item label={data[1]} value="b" />
        <RadioButton.Item label={data[2]} value="c" />
        <RadioButton.Item label={data[3]} value="d" />
      </RadioButton.Group>
      <Button
        mode="contained"
        onPress={() => console.log('avançar :: ' + value)}>
        Avançar
      </Button>
    </View>
  );
};

export default App;
