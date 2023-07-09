import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {VerticalItem} from '../components/VerticalItem';
import {VerticalFooter} from '../components/VerticalFooter';
import {useInfiniteQueryPhoto} from '../hooks/useInfiniteQueryPhoto';

export function VerticalList() {
  const {data, loadMore} = useInfiniteQueryPhoto();

  return (
    <FlatList
      style={styles.listWrap}
      renderItem={VerticalItem}
      ListFooterComponent={VerticalFooter}
      onEndReached={loadMore}
      onEndReachedThreshold={0.75}
      data={data?.pages.flat()}
    />
  );
}

const styles = StyleSheet.create({
  listWrap: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
