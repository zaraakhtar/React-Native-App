import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <View style={Styles.textContainer}>
        <Text style={Styles.headingText}>FlatCards</Text>
      </View>

      <View style={Styles.Container}>
        <View style={[Styles.card, Styles.cardOne]}>
          <Text>Orange</Text>
        </View>
        <View style={[Styles.card, Styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[Styles.card, Styles.cardThree]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
}


const Styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  textContainer: {
    alignItems: 'center'
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 5,
  },
  cardOne: {
    backgroundColor: '#F0A04B',
  },
  cardTwo: {
    backgroundColor: '#B1C29E',
  },
  cardThree: {
    backgroundColor: '#FADA7A',
  },
});

