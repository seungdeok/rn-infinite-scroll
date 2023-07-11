import {useInfiniteQuery, InfiniteData} from '@tanstack/react-query';
import {photoAPI} from '../api/photoAPI';
import {IPhoto} from '../types/IPhoto';

interface IReturnType {
  data: InfiniteData<IPhoto[]> | undefined;
  loadMore: () => void;
  isFetchingNextPage: boolean;
}

export function useInfiniteQueryPhoto(queryKey: string): IReturnType {
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery<IPhoto[]>(
      ['photos', queryKey],
      ({pageParam}) => photoAPI.get(pageParam) as Promise<IPhoto[]>,
      {
        suspense: true,
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length + 1;
        },
      },
    );

  function loadMore() {
    if (hasNextPage) {
      fetchNextPage();
    }
  }

  return {
    data,
    loadMore,
    isFetchingNextPage,
  };
}
