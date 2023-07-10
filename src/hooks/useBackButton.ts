import {useCallback, useEffect, useMemo, useRef} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {notify} from '../utils/notify';

export function useBackButton() {
  const isExit = useRef<boolean>(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation();
  const {routes} = useNavigationState(state => state);

  const currentStackLength = useMemo(
    () => routes[0].state?.routes.length ?? 1,
    [routes],
  );

  const handleBackPress = useCallback(() => {
    if (currentStackLength > 1) {
      navigation.goBack();
      return true;
    } else if (currentStackLength === 1) {
      if (!isExit.current) {
        notify('뒤로가기 버튼을 한 번 더 누르시면 앱이 종료됩니다');
        isExit.current = true;

        const id: NodeJS.Timeout = setTimeout(() => {
          isExit.current = false;
        }, 2000);
        timerId.current = id;
      } else {
        if (timerId.current) {
          clearTimeout(timerId.current);
        }
        BackHandler.exitApp();
      }

      return true;
    }
    return false;
  }, [currentStackLength, navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
      isExit.current = false;
    };
  }, [handleBackPress]);
}
