import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HorizontalList} from '../components/HorizontalList';
import {LoadingView} from '../components/LoadingView';
import {ErrorBoundary} from '../components/ErrorBoundary';

export function HorizontalScreen() {
  return (
    <SafeAreaView>
      <Text>HorizontalScreen</Text>
      <ErrorBoundary>
        <Suspense fallback={<LoadingView />}>
          <HorizontalList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}
