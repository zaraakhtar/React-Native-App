import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';


export default function FancyCard() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Trending Places</Text>
 <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.Card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/1018/640/400',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lake Saif-ul-Malook</Text>
          <Text style={styles.cardLable}>Naran, Khyber Pakhtunkhwa</Text>
          <Text style={styles.cardTDescription}>
            A stunning alpine lake located at 3,224m, famous for its emerald-green water surrounded by snowcapped peaks.
          </Text>
        </View>
      </View>

      <View style={[styles.Card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/1043/640/400',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Attabad Lake</Text>
          <Text style={styles.cardLable}>Hunza Valley, Gilgit-Baltistan</Text>
          <Text style={styles.cardTDescription}>
            A breathtaking turquoise lake formed in 2010 due to a landslide, now a top tourist destination in northern Pakistan.
          </Text>
        </View>
      </View>

      <View style={[styles.Card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://picsum.photos/id/1056/640/400',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Rawal Lake</Text>
          <Text style={styles.cardLable}>Islamabad, Pakistan</Text>
          <Text style={styles.cardTDescription}>
            A man-made reservoir providing water to the twin cities, also a popular spot for picnics, boating, and sunsets.
          </Text>
          <Text style={styles.cardFooter}>This is the card footer</Text>
        </View>
      </View>
      </ScrollView>
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
  container:{
    marginLeft: 20,
    marginRight: 20,
  },
  Card: {
    width: 320,
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
  }, 
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLable: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  cardTDescription: {
    fontSize: 13,
    color: '#444',
  },
  cardFooter: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
});
