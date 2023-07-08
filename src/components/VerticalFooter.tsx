import React from 'react';
import {StyleSheet, View} from 'react-native';

export function VerticalFooter() {
  return <View style={styles.footerWrap} />;
}

const styles = StyleSheet.create({
  footerWrap: {
    paddingBottom: 48,
  },
});
