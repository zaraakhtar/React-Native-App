import { StyleSheet, Text, View, Linking } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style = { styles.headerText}>

            </Text>
        </View>
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
  card: {
    
  },
  elevatedCard: {

  },
  headingContainer: {},
  headerText: {},
});
