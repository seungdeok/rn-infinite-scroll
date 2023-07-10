import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorWrap}>
          <Text style={styles.text}>문제가 발생했습니다.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  errorWrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
