import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HorizontalList} from '../components/HorizontalList';
import {LoadingView} from '../components/LoadingView';

export function HorizontalScreen() {
  return (
    <SafeAreaView>
      <Text>HorizontalScreen</Text>
      <Suspense fallback={<LoadingView />}>
        <HorizontalList />
      </Suspense>
    </SafeAreaView>
  );
}
