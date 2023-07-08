import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {photoAPI} from '../api/photoAPI';
import {IPhoto} from '../types/IPhoto';
import {VerticalItem} from '../components/VerticalItem';
import {VerticalFooter} from '../components/VerticalFooter';

export function VerticalScreen() {
  const {data, hasNextPage, fetchNextPage} = useInfiniteQuery<IPhoto[]>(
    ['photos'],
    ({pageParam}) => photoAPI.get(pageParam) as Promise<IPhoto[]>,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    },
  );

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.listWrap}
        renderItem={VerticalItem}
        ListFooterComponent={VerticalFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.75}
        data={data?.pages.flat()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listWrap: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
