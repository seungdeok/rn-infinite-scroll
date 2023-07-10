import React, {Suspense} from 'react';
import {VerticalList} from '../components/VerticalList';
import {LoadingView} from '../components/LoadingView';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {Layout} from '../components/Layout';

export function VerticalScreen() {
  return (
    <Layout title="VerticalScreen">
      <ErrorBoundary>
        <Suspense fallback={<LoadingView />}>
          <VerticalList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
