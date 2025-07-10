import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

export default function FancyCard() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.Card, styles.cardElevated]}>
        <Image
          source={{
           uri: 'https://picsum.photos/300/200'
          }}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  Card: {
    width: 320, 
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
  },
});
