import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SCREENS} from '@constants/screenKeys';
import DashBoard from '@features/DashBoard';
const MainStack = createNativeStackNavigator();
export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={SCREENS.DASH_BOARD} component={DashBoard} />
    </MainStack.Navigator>
  );
}
