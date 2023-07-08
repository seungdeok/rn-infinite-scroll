import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {VerticalList} from '../components/VerticalList';

export function VerticalScreen() {
  return (
    <SafeAreaView>
      <Suspense fallback={<Text>loading...</Text>}>
        <VerticalList />
      </Suspense>
    </SafeAreaView>
  );
}
