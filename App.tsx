/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export interface ParamList {
  Horizontal: undefined;
  Vertical: undefined;
}

function HorizontalScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HorizontalScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function VerticalScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>VerticalScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tabs = createBottomTabNavigator();

function App(): JSX.Element {
  return (
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
  );
}

export default App;
