import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Image } from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Ultimate Lahore Street Food Tour 🍢
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://img.youtube.com/vi/CCR7uHDKP-s/maxresdefault.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            By now you’ve realized, we love food…and why shouldn’t we? We’re
            from Lahore, aren’t we? And we’d love for you to try out all our
            amazingly iconic foods that the city offers; because if you haven’t
            had all the street food in Lahore, well, did you even visit us
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://visitlahore.com/traditional-food-in-lahore/')
            }
          >
            <Text>
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//this is the style of the action cards
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
  card: {
    width: 350,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  elevatedCard: {},
  headingContainer: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
    borderRadius: 6,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bodyContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  footerContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
  },
});
