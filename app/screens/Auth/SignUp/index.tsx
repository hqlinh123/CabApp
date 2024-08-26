import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomPolicyText from 'components/CustomPolicyText';
import FormInput from 'components/FormInput';
import SocialCustom from 'components/SocialCustom';
import {blurhash} from 'constants/hash';
import {VALIDATE_EMAIL_RULES, VALIDATE_PASSWORD_RULES} from 'constants/regx';
import {Image} from 'expo-image';
import React from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import useAuth from '../useAuth';
import styles from './styles';

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
  } = useForm<FormData>({mode: 'onChange'});
  const {
    onSubmit,
    goBack,
    onForgotPassword,
    onMaskPassword,
    onRememberPassword,
    onCheckTermCondition,
    onLoginApple,
    onLoginFacebook,
    onLoginGoogle,
    isCheckTerm,
    isMaskPassword,
    isRememberPassword,
  } = useAuth();

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
          rules={VALIDATE_EMAIL_RULES}
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
          rules={VALIDATE_PASSWORD_RULES}
          isPassword
          title="Password"
          maxLength={8}
          isOther={false}
          onCheckBox={onRememberPassword}
          onForgot={onForgotPassword}
          onMask={onMaskPassword}
          isChecked={isRememberPassword}
          isMask={isMaskPassword}
        />
        <CustomPolicyText type="sign up" isChecked={isCheckTerm} onCheck={onCheckTermCondition} />
        <TouchableOpacity
          disabled={!isCheckTerm}
          style={[styles.button, !isCheckTerm && styles.disabelBtn]}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <SocialCustom
          type="sign up"
          onLoginApple={onLoginApple}
          onLoginFaceBook={onLoginFacebook}
          onLoginGoogle={onLoginGoogle}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
