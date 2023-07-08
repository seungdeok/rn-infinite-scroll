/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function StationScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function StoreScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function MyPageScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function MenuScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Station" component={StationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
