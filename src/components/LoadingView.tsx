import React from 'react';
import LottieView from 'lottie-react-native';

export function LoadingView() {
  return <LottieView source={require('../assets/Lottie.json')} autoPlay loop />;
}
