import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function VerticalFooter() {
  return (
    <View style={styles.footerWrap}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  footerWrap: {
    paddingBottom: 48,
  },
});
