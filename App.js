import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const Greetings = props => {
  return (
    <View>
      <Text>Hello {props.name} </Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.center}>
      <Greetings name="junior" />
      <Greetings name="Baloji" />
      <Greetings name="Mazamba" />
      <Button title="CLick me" onPress={() => setCount(count + 1)} />
      <Text>Button has been cliecked {count} times</Text>
    </View>
  );
};

export default App;
