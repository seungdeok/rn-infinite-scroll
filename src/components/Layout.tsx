import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useBackButton} from '../hooks/useBackButton';

interface Props {
  children: ReactNode;
  title: string;
}

export function Layout({children, title}: Props) {
  useBackButton();
  return (
    <SafeAreaView>
      <Text style={styles.title}>{title}</Text>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 12,
  },
});
