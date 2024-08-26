import React, {useState} from 'react';
import {GestureResponderEvent, Text, TextInput, View} from 'react-native';
import {Controller, Control} from 'react-hook-form';
import styles from './styles';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useAuth from 'screens/Auth/useAuth';

type FormInputProps = {
  control: Control<any>; // The form control
  name: string; // The name of the input field
  rules?: object; // Validation rules
  placeholder: string; // Placeholder text for the input field
  secureTextEntry?: boolean; // Whether to hide the input text (e.g., for passwords)
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'; // The keyboard type
  title?: string;
  isEmail?: boolean;
  isPassword?: boolean;
  isValid?: boolean;
  maxLength?: number;
  isOther?: boolean;
  isMask?: boolean;
  isChecked?: boolean;
  onForgot?: () => void;
  onCheckBox?: (value: boolean) => void;
  onMask?: () => void;
};

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  keyboardType = 'default',
  isEmail = false,
  isPassword = false,
  isValid,
  maxLength = 0,
  isOther = false,
  isChecked,
  isMask,
  onForgot,
  onCheckBox,
  onMask,
}: FormInputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <View style={[{flexDirection: 'row'}, styles.input, error && {borderColor: 'red'}]}>
              {isEmail && <Fontisto name="email" size={18} color="#016B45" style={{marginRight: 12}} />}
              {isPassword && <Fontisto name="locked" size={18} color="#016B45" style={{marginRight: 12}} />}
              <TextInput
                style={[error && {borderColor: 'red'}]}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isMask}
                keyboardType={keyboardType}
                maxLength={maxLength}
              />
              {isEmail && isValid && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color="#016B45"
                  style={{position: 'absolute', right: 10, top: 15}}
                />
              )}
              {isPassword && (
                <MaterialCommunityIcons
                  name={isMask ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="#016B45"
                  style={{position: 'absolute', right: 10, top: 15}}
                  onPress={onMask}
                />
              )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            {isOther && (
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 16,
                  }}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={onCheckBox}
                    color={isChecked ? '#016B45' : '#016B45'}
                  />
                  <Text style={{marginHorizontal: 6}}>Remember me</Text>
                </View>
                <View>
                  <Text onPress={onForgot} style={{textDecorationLine: 'underline', color: '#016B45'}}>
                    Forgot password?
                  </Text>
                </View>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

export default FormInput;
