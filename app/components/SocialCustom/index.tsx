import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as NavigationServices from '@services/NavigationService';
import {SCREENS} from 'constants/screenKeys';
import {Image} from 'expo-image';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export type SocialCustomProps = {
  type: 'sign in' | 'sign up';
  isChecked?: boolean;
  onCheck?: (value: boolean) => void;
};
const SocialCustom = ({type}: SocialCustomProps) => {
  const description = type === 'sign in' ? "Don't have account." : ' Already have an account?';
  const title = type === 'sign in' ? 'Sign Up' : 'Sign In';

  const onNavigate = () => {
    type === 'sign in' && NavigationServices.navigate(SCREENS.SIGN_UP);
    type === 'sign up' && NavigationServices.navigate(SCREENS.SIGN_IN);
  };

  return (
    <View style={{marginVertical: 20, alignSelf: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{height: 1, width: '32%', backgroundColor: 'gray'}} />
        <Text style={{marginHorizontal: 20}}>Or sign in with</Text>
        <View style={{height: 1, width: '32%', backgroundColor: 'gray'}} />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 20}}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name="facebook" size={24} color="#005BF0" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image source={'https://img.icons8.com/color/96/google-logo.png'} style={{width: 32, height: 32}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#F0F0F0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome6 name="apple" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{alignSelf: 'center', marginVertical: 20}}>
          {description}{' '}
          <Text onPress={onNavigate} style={{fontWeight: '600', textDecorationLine: 'underline', color: '#016B45'}}>
            {title}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SocialCustom;
