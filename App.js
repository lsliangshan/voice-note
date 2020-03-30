/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { Dimensions, StatusBar } from 'react-native';

import store from './store/index'; // 导入store

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

import * as RootNavigation from './RootNavigation';

const Stack = createStackNavigator();

import Main from './screens/Main/index';
import Login from './screens/Login';
import Register from './screens/Register';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); // 初始化state,获取redux里面数据
    store.subscribe(() => {
      // 订阅state的改变
      this.setState(store.getState());
    });
    console.disableYellowBox = true;
  }

  render () {
    return (
      <NavigationContainer ref={RootNavigation.navigationRef}>
        {/* <NavigationContainer ref={RootNavigation.navigationRef}> */}
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
              // gestureDirection: 'horizontal',
              cardOverlayEnabled: true,
              // ...TransitionPresets.FadeFromBottomAndroid, // 从下往上滑入 FadeIn
              // ...TransitionPresets.ModalPresentationIOS, // 从下往上滑入 顶部空白
              // ...TransitionPresets.ModalSlideFromBottomIOS, // 从下往上滑入
              // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS, // 从底部滑入 顶部空白
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 从右侧滑入
              // ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              // gestureDirection: 'horizontal',
              cardOverlayEnabled: true,
              // ...TransitionPresets.FadeFromBottomAndroid, // 从下往上滑入 FadeIn
              // ...TransitionPresets.ModalPresentationIOS, // 从下往上滑入 顶部空白
              // ...TransitionPresets.ModalSlideFromBottomIOS, // 从下往上滑入
              // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS, // 从底部滑入 顶部空白
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 从右侧滑入
              // ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              // headerShown: false,
              headerTransparent: true,
              headerTitle: '',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#4fc08d',
              },
              headerStatusBarHeight: StatusBar.currentHeight,
              headerTintColor: '#fff',
              gestureEnabled: false,
              // gestureDirection: 'horizontal',
              cardOverlayEnabled: true,
              // ...TransitionPresets.FadeFromBottomAndroid, // 从下往上滑入 FadeIn
              // ...TransitionPresets.ModalPresentationIOS, // 从下往上滑入 顶部空白
              // ...TransitionPresets.ModalSlideFromBottomIOS, // 从下往上滑入
              // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS, // 从底部滑入 顶部空白
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 从右侧滑入
              // ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
