import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IPhoto} from '../types/IPhoto';

export function HorizontalItem({item}: {item: IPhoto}) {
  return (
    <View style={styles.itemWrap}>
      <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    position: 'absolute',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: 16,
  },
});
