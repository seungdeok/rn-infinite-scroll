import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HorizontalList} from '../components/HorizontalList';

export function HorizontalScreen() {
  return (
    <SafeAreaView>
      <Suspense fallback={<Text>loading...</Text>}>
        <HorizontalList />
      </Suspense>
    </SafeAreaView>
  );
}
