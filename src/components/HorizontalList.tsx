import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {HorizontalItem, SPACING_HORIZONTAL} from './HorizontalItem';
import {useInterval} from '../hooks/useInterval';
import {useInfiniteQueryPhoto} from '../hooks/useInfiniteQueryPhoto';

export const INTERVAL_TIME = 5000;
const {width: windowWidth} = Dimensions.get('window');

export function HorizontalList() {
  const {data, loadMore} = useInfiniteQueryPhoto('horizontal');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const snapToOffsets = useMemo(
    () =>
      Array.from(Array(data?.pages.flat().length)).map(
        (_, index) => index * windowWidth,
      ),
    [data],
  );

  function handleScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    setCurrentIndex(
      Math.floor(
        e.nativeEvent.contentOffset.x / (windowWidth - SPACING_HORIZONTAL * 2),
      ),
    );
  }

  useEffect(() => {
    if (currentIndex !== snapToOffsets.length) {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: snapToOffsets[currentIndex],
      });
    }
  }, [currentIndex, snapToOffsets]);

  useInterval(() => {
    setCurrentIndex(prev =>
      prev < snapToOffsets.length - 1 ? prev + 1 : prev,
    );
  }, INTERVAL_TIME);

  return (
    <View style={styles.listContainer}>
      <FlatList
        testID="horizontalList"
        ref={flatListRef}
        data={data?.pages.flat()}
        horizontal
        renderItem={HorizontalItem}
        snapToOffsets={snapToOffsets}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, _) => String(item.id)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.75}
        onMomentumScrollEnd={handleScrollEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: windowWidth,
  },
  carouselItem: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
});
