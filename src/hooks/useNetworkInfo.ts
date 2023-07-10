import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {notify} from '../utils/notify';

export function useNetworkInfo() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== true) {
        notify('인터넷 연결이 불안합니다');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
}
