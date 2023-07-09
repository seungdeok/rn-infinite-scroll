import {useQuery} from '@tanstack/react-query';
import {IPhoto} from '../types/IPhoto';
import {photoAPI} from '../api/photoAPI';

interface IReturnType {
  data: IPhoto[] | undefined;
}

export function useQueryPhoto(): IReturnType {
  const {data} = useQuery<IPhoto[]>(
    ['photo'],
    ({pageParam}) => photoAPI.get(pageParam) as Promise<IPhoto[]>,
    {
      suspense: true,
    },
  );

  return {data};
}
