import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {
  loading: boolean;
}

export function LoadingOverlay({loading}: Props) {
  if (loading) {
    return (
      <View style={styles.overlay} testID="loadingIndicator">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});
