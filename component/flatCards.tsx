import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={Styles.headingText}>FlatCards</Text>
      <View>
        <View style={Styles.Container}>
          <View style={[Styles.card, Styles.cardOne]}>
            <Text>Red</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  Container: {},
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 9,
  },
  cardOne: {
    backgroundColor: 'red',
  },
});
