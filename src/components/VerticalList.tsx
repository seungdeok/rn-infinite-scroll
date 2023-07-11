import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {VerticalItem} from '../components/VerticalItem';
import {VerticalFooter} from '../components/VerticalFooter';
import {useInfiniteQueryPhoto} from '../hooks/useInfiniteQueryPhoto';

export function VerticalList() {
  const {data, loadMore} = useInfiniteQueryPhoto('vertical');

  return (
    <FlatList
      testID="verticalList"
      style={styles.listWrap}
      renderItem={VerticalItem}
      ListFooterComponent={VerticalFooter}
      keyExtractor={(item, _) => String(item.id)}
      onEndReached={loadMore}
      onEndReachedThreshold={0.75}
      data={data?.pages.flat()}
    />
  );
}

const styles = StyleSheet.create({
  listWrap: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
