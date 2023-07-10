import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

export function LoadingView() {
  return (
    <View style={styles.lottieWrap} testID="loadingView">
      <LottieView
        style={styles.lottie}
        source={require('../assets/Lottie.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieWrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
