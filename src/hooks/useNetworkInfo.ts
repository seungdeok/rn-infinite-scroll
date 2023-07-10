import {useEffect} from 'react';
import * as NetInfo from '@react-native-community/netinfo';
import {notify} from '../utils/notify';

export function useNetworkInfo() {
  useEffect(() => {
    function networkHandler(state: NetInfo.NetInfoState) {
      if (state.isConnected !== true) {
        notify('인터넷 연결이 불안합니다');
      }
    }

    const unsubscribe = NetInfo.addEventListener(networkHandler);

    return () => {
      unsubscribe();
    };
  }, []);
}
