import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {VerticalItem} from '../components/VerticalItem';
import {VerticalFooter} from '../components/VerticalFooter';
import {useQueryPhoto} from '../hooks/useQueryPhoto';

export function VerticalList() {
  const {data, loadMore} = useQueryPhoto();

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
