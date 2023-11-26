import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [boxColors, setBoxColors] = useState(['red', 'red', 'red', 'red']);

  const changeColor = (index) => {
    const newBoxColors = [...boxColors];
    if (newBoxColors[index] === 'red') {
      newBoxColors[index] = 'green';
    } else {
      newBoxColors[index] = 'red';
    }
    setBoxColors(newBoxColors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => changeColor(0)}>
            <Text>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => changeColor(1)}>
            <Text>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => changeColor(2)}>
            <Text>Button 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => changeColor(3)}>
            <Text>Button 4</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.boxesContainer}>
          <View style={[styles.box, { backgroundColor: boxColors[0] }]} />
          <View style={[styles.box, { backgroundColor: boxColors[1] }]} />
          <View style={[styles.box, { backgroundColor: boxColors[2] }]} />
          <View style={[styles.box, { backgroundColor: boxColors[3] }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  boxesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    margin: 5,
  },
});

export default App;