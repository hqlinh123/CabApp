import {SocialCustomProps} from 'components/SocialCustom';
import Checkbox from 'expo-checkbox';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CustomPolicyText = ({type, isChecked, onCheck}: SocialCustomProps) => {
  const title = type === 'sign in' ? ' By logging in' : ' By signning up';
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      {type === 'sign up' && (
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={onCheck}
          color={isChecked ? '#016B45' : '#016B45'}
        />
      )}
      <Text style={{textAlign: 'center'}}>
        {title}, you agree to our{' '}
        <Text style={{textDecorationLine: 'underline', fontWeight: '600', color: '#016B45'}} onPress={() => {}}>
          Terms & Conditions
        </Text>{' '}
        and{' '}
        <Text style={{textDecorationLine: 'underline', fontWeight: '600', color: '#016B45'}} onPress={() => {}}>
          Privacy Policy
        </Text>{' '}
      </Text>
    </View>
  );
};

export default CustomPolicyText;
