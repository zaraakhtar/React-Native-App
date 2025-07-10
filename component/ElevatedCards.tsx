import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';

export default function ElevatedCards() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style ={styles.container}>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>Tap</Text>
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
  CardElevated: {
    backgroundColor: '#D9A299'
  },
  Card: {
    width: 100,
    height: 100,
  },
})