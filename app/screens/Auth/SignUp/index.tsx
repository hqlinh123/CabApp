import * as NavigationService from '@services/NavigationService';
import CustomPolicyText from 'components/CustomPolicyText';
import FormInput from 'components/FormInput';
import SocialCustom from 'components/SocialCustom';
import {blurhash} from 'constants/hash';
import {SCREENS} from 'constants/screenKeys';
import {Image} from 'expo-image';
import React from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import useAuth from '../useAuth';
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>();
  const {isCheckBox, onCheck} = useAuth();
  const isEnableButton = isCheckBox;
  const onSubmit = (data: FormData) => {
    console.log('data', data);
    NavigationService.navigate(SCREENS.SIGN_IN);
  };

  const goBack = () => NavigationService.goBack();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <MaterialIcons name="keyboard-backspace" size={24} color="black" onPress={goBack} />
        <Image
          style={styles.image}
          source="https://img.freepik.com/free-vector/taxi-application-theme_23-2148489550.jpg"
          placeholder={{blurhash}}
          contentFit="cover"
        />
        <Text style={styles.title}>Join the E-Bike Movement</Text>
        <Text>
          Create an account and discover the freedom of electric biking. Your journey towards a smarter, greener commute
          starts here.
        </Text>
        <FormInput
          control={control}
          name="email"
          placeholder="example@email.com"
          keyboardType="email-address"
          rules={{
            required: 'Email is required',
            pattern: {value: /^\S+@\S+$/i, message: 'Invalid email format'},
          }}
          isEmail
          title="Email address"
          isValid={isValid}
          maxLength={50}
          isOther={false}
        />

        <FormInput
          control={control}
          name="password"
          placeholder="Must be 8 characters"
          secureTextEntry
          rules={{required: 'Password is required'}}
          isPassword
          title="Password"
          maxLength={8}
          isOther={false}
        />
        <CustomPolicyText type="sign up" isChecked={isCheckBox} onCheck={onCheck} />
        <TouchableOpacity
          disabled={!isEnableButton}
          style={[styles.button, !isEnableButton && styles.disabelBtn]}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <SocialCustom type="sign up" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
