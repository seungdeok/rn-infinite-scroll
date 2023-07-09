import React, {Suspense} from 'react';
import {SafeAreaView} from 'react-native';
import {HorizontalList} from '../components/HorizontalList';
import {LoadingView} from '../components/LoadingView';

export function HorizontalScreen() {
  return (
    <SafeAreaView>
      <Suspense fallback={<LoadingView />}>
        <HorizontalList />
      </Suspense>
    </SafeAreaView>
  );
}
