import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Minuteur from './Components/minuteur'
import Input from './Componens/input'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      work : 0,
      rest : 0,
      current: 0,
    }
  }
  startMin

  render() {
    return (
      <View style={styles.container}>
        <Text>Timer!</Text>
        <Minuteur count={this.state.current}></Minuteur>
        <Input text={0}></Input>
        <Input></Input>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
