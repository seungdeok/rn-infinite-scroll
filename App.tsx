/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {VerticalScreen} from './src/pages/VerticalScreen';
import {HorizontalScreen} from './src/pages/HorizontalScreen';

export interface ParamList {
  Horizontal: undefined;
  Vertical: undefined;
}

const Tabs = createBottomTabNavigator();
const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
          <Tabs.Screen
            name="Vertical"
            component={VerticalScreen}
            options={{title: '목록'}}
          />
          <Tabs.Screen
            name="Horizontal"
            component={HorizontalScreen}
            options={{title: '배너'}}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
