import React, {Suspense} from 'react';
import {HorizontalList} from '../components/HorizontalList';
import {LoadingView} from '../components/LoadingView';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {Layout} from '../components/Layout';

export function HorizontalScreen() {
  return (
    <Layout title="HorizontalScreen">
      <ErrorBoundary>
        <Suspense fallback={<LoadingView />}>
          <HorizontalList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
