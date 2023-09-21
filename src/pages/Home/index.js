import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, FlatList } from 'react-native';

import { FeedItem } from '../../components/feedItem'

export default function Home() {

  let feedItems = [
    {
      id: '1',
      image: require('../../../img/posts/blackVelvet.jpg'),
      name: 'Saulo Tavares',
      description: 'Esse é o Black Velvet',
    },
    {
      id: '2',
      image: require('../../../img/posts/chocolate.jpg'),
      name: 'Rafael Pacheco',
      description: 'Esse é o Chocolate',
    },
    {
      id: '3',
      image: require('../../../img/posts/superb.jpg'),
      name: 'Rodrigo Ramos',
      description: 'Esse é o Superb',
    }
  ]


  return (
    <View style={styles.container}>

      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: '#DDD' }]}>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: '#FFF' }]}>O que acontece</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => <FeedItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
    zIndex: 99
  },
  labelText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 2,
  },
  indicator: {
    backgroundColor: "#FFF",
    width: 52,
    height: 2,
    alignSelf: 'center',
  }
})