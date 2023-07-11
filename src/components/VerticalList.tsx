import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {LoadingOverlay} from './LoadingOverlay';
import {VerticalItem} from '../components/VerticalItem';
import {useInfiniteQueryPhoto} from '../hooks/useInfiniteQueryPhoto';

export function VerticalList() {
  const {data, loadMore, isFetchingNextPage} =
    useInfiniteQueryPhoto('vertical');

  return (
    <View style={styles.container}>
      <LoadingOverlay loading={isFetchingNextPage} />
      <FlatList
        testID="verticalList"
        contentContainerStyle={styles.listWrap}
        renderItem={VerticalItem}
        onEndReached={loadMore}
        data={data?.pages.flat()}
        keyExtractor={(item, _) => String(item.id)}
        onEndReachedThreshold={0.75}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 48,
  },
  listWrap: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 48,
  },
});
