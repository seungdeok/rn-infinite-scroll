import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {IPhoto} from '../types/IPhoto';

const {width: windowWidth} = Dimensions.get('window');
export const SPACING_HORIZONTAL = 16;

export function HorizontalItem({item}: {item: IPhoto}) {
  return (
    <View key={item.id} style={styles.itemWrap}>
      <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#ddd',
    borderRadius: 12,
    width: windowWidth - SPACING_HORIZONTAL * 2,
    marginHorizontal: SPACING_HORIZONTAL,
  },
  image: {
    borderRadius: 24,
    width: 64,
    height: 64,
    marginRight: 10,
  },
  text: {
    color: '#000',
    flex: 1,
  },
});