import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomPolicyText from 'components/CustomPolicyText';
import FormInput from 'components/FormInput';
import SocialCustom from 'components/SocialCustom';
import {blurhash} from 'constants/hash';
import {Image} from 'expo-image';
import React from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../SignUp/styles';
import useAuth from '../useAuth';
import {VALIDATE_EMAIL_RULES, VALIDATE_PASSWORD_RULES} from 'constants/regx';

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>({mode: 'onChange'});
  const {
    onSubmit,
    goBack,
    onForgotPassword,
    onMaskPassword,
    onRememberPassword,
    onLoginApple,
    onLoginFacebook,
    onLoginGoogle,
    isMaskPassword,
    isRememberPassword,
  } = useAuth();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <MaterialIcons name="keyboard-backspace" size={24} color="black" onPress={goBack} />
        <Image
          style={styles.image}
          source="https://www.goteso.com/products/assets/images/clone-scripts/mytaxi/mytaxi-right-header.png"
          placeholder={{blurhash}}
          contentFit="cover"
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text>Log in to your account and continue your adventure. Your next ride is just a tap away."</Text>
        <FormInput
          control={control}
          name="email"
          placeholder="example@email.com"
          keyboardType="email-address"
          rules={VALIDATE_EMAIL_RULES}
          isEmail
          title="Email address"
          isValid={isValid}
          maxLength={50}
        />

        <FormInput
          control={control}
          name="password"
          placeholder="Must be at least 8 characters long"
          secureTextEntry
          rules={VALIDATE_PASSWORD_RULES}
          isPassword
          title="Password"
          maxLength={50}
          isOther
          onCheckBox={onRememberPassword}
          onForgot={onForgotPassword}
          onMask={onMaskPassword}
          isChecked={isRememberPassword}
          isMask={isMaskPassword}
        />
        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, !isValid && styles.disabelBtn]}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <CustomPolicyText type="sign in" />
        <SocialCustom
          type="sign in"
          onLoginApple={onLoginApple}
          onLoginFaceBook={onLoginFacebook}
          onLoginGoogle={onLoginGoogle}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
