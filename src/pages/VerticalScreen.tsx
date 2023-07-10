import React, {Suspense} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {VerticalList} from '../components/VerticalList';
import {LoadingView} from '../components/LoadingView';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {useBackButton} from '../hooks/useBackButton';

export function VerticalScreen() {
  useBackButton();

  return (
    <SafeAreaView>
      <Text>VerticalScreen</Text>
      <ErrorBoundary>
        <Suspense fallback={<LoadingView />}>
          <VerticalList />
        </Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}
