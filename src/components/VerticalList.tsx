import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {VerticalItem} from '../components/VerticalItem';
import {useInfiniteQueryPhoto} from '../hooks/useInfiniteQueryPhoto';
import {LoadingOverlay} from './LoadingOverlay';

export function VerticalList() {
  const {data, loadMore, isFetchingNextPage} =
    useInfiniteQueryPhoto('vertical');

  return (
    <View style={styles.container}>
      <LoadingOverlay loading={isFetchingNextPage} />
      <FlatList
        testID="verticalList"
        style={styles.listWrap}
        renderItem={VerticalItem}
        contentContainerStyle={styles.footerWrap}
        keyExtractor={(item, _) => String(item.id)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.75}
        data={data?.pages.flat()}
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
  },
  footerWrap: {
    paddingBottom: 48,
  },
});
