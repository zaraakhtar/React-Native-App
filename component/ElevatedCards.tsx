import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';

export default function ElevatedCards() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Cities In Pakistan</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card, styles.cardOne]}>
          <Text>Lahore</Text>
        </View>
        <View style={[styles.Card, styles.cardTwo]}>
          <Text>Karachi</Text>
        </View>
        <View style={[styles.Card, styles.cardThree]}>
          <Text>Islamabad</Text>
        </View>
        <View style={[styles.Card, styles.cardFour]}>
          <Text>Nawabshah</Text>
        </View>
        <View style={[styles.Card, styles.cardFive]}>
          <Text>Rawalpindi</Text>
        </View>
        <View style={[styles.Card, styles.cardSix]}>
          <Text>Multan</Text>
        </View>
        <View style={[styles.Card, styles.cardSeven]}>
          <Text>Pishawar</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  textContainer: {
    alignItems: 'center'
  },
  container: {
    padding: 8
  },
  Card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
    elevation: 4, 
    shadowOffset: {
        width: 1,
        height: 1
    },
  },
  cardOne: {
    backgroundColor: '#D9A299',
  },
  cardTwo: {
    backgroundColor: '#DCC5B2',
  },
  cardThree: {
    backgroundColor: '#F0E4D3',
  },
  cardFour: {
    backgroundColor: '#D1D8BE',
  },
  cardFive: {
    backgroundColor: '#FFDCDC',
  },
  cardSix: {
    backgroundColor: '#C0C9EE',
  },
  cardSeven: {
    backgroundColor: '#ECFAE5',
  },
});
