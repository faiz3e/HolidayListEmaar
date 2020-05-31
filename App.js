import React from 'react';
import { StyleSheet, Text, View ,TextInput } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={styles.container}>
      <Text>Its working</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
