import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SCREENS} from '@constants/screenKeys';
import OnBoarding from '@auth/OnBoarding';
import SignUp from '@auth/SignUp';
import SignIn from '@auth/SignIn';
const AuhStack = createNativeStackNavigator();
export default function AuthStackNavigator() {
  return (
    <AuhStack.Navigator>
      <AuhStack.Screen name={SCREENS.ON_BOARDING} component={OnBoarding} options={{headerShown: false}} />
      <AuhStack.Screen name={SCREENS.SIGN_UP} options={{headerShown: false}} component={SignUp} />
      <AuhStack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
    </AuhStack.Navigator>
  );
}
