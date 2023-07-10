import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {HorizontalItem, SPACING_HORIZONTAL} from './HorizontalItem';
import {useInterval} from '../hooks/useInterval';
import {useQueryPhoto} from '../hooks/useQueryPhoto';

export const INTERVAL_TIME = 5000;
const {width: windowWidth} = Dimensions.get('window');

export function HorizontalList() {
  const {data} = useQueryPhoto();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const snapToOffsets = useMemo(
    () =>
      Array.from(Array(data?.flat().length)).map(
        (_, index) => index * windowWidth,
      ),
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

  return (
    <View style={styles.listContainer}>
      <FlatList
        testID="horizontalList"
        ref={flatListRef}
        data={data}
        horizontal
        renderItem={HorizontalItem}
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
});
