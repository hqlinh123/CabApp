import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthStackNavigator';
import {SCREENS} from 'constants/screenKeys';
import MainStackNavigator from './MainStackNavigator';
import {navigationRef} from 'services/NavigationService';
const RootStack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name={SCREENS.AUTH_STACK} component={AuthStackNavigator} options={{headerShown: false}} />
        <RootStack.Screen name={SCREENS.MAIN_STACK} component={MainStackNavigator} options={{headerShown: false}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
