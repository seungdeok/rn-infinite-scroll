import React, {Suspense} from 'react';
import {SafeAreaView} from 'react-native';
import {VerticalList} from '../components/VerticalList';
import {LoadingView} from '../components/LoadingView';

export function VerticalScreen() {
  return (
    <SafeAreaView>
      <Suspense fallback={<LoadingView />}>
        <VerticalList />
      </Suspense>
    </SafeAreaView>
  );
}
