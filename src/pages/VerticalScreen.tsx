import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {VerticalList} from '../components/VerticalList';
import {LoadingView} from '../components/LoadingView';

export function VerticalScreen() {
  return (
    <SafeAreaView>
      <Text>VerticalScreen</Text>
      <Suspense fallback={<LoadingView />}>
        <VerticalList />
      </Suspense>
    </SafeAreaView>
  );
}
