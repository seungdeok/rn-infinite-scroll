import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IPhoto} from '../types/IPhoto';
import {useInterval} from '../hooks/useInterval';
import {useQueryPhoto} from '../hooks/useQueryPhoto';

export const INTERVAL_TIME = 5000;
export const SPACING_HORIZONTAL = 16;

const {width: windowWidth} = Dimensions.get('window');
const offset = windowWidth;

export function HorizontalList() {
  const {data} = useQueryPhoto();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const snapToOffsets = useMemo(
    () =>
      Array.from(Array(data?.flat().length)).map((_, index) => index * offset),
    [data],
  );

  useEffect(() => {
    if (currentIndex !== snapToOffsets.length) {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: snapToOffsets[currentIndex],
      });
    }
  }, [currentIndex, snapToOffsets]);

  useInterval(() => {
    setCurrentIndex(prev => (prev === snapToOffsets.length - 1 ? 0 : prev + 1));
  }, INTERVAL_TIME);

  const renderItem = ({item}: {item: IPhoto}) => (
    <View key={item.id} style={styles.itemWrap}>
      <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        renderItem={renderItem}
        snapToOffsets={snapToOffsets}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, _) => String(item.id)}
        onMomentumScrollEnd={e => {
          setCurrentIndex(
            Math.floor(
              e.nativeEvent.contentOffset.x /
                (windowWidth - SPACING_HORIZONTAL * 2),
            ),
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: windowWidth,
    paddingTop: 16,
  },
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
