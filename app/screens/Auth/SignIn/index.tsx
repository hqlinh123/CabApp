import CustomPolicyText from 'components/CustomPolicyText';
import FormInput from 'components/FormInput';
import SocialCustom from 'components/SocialCustom';
import {blurhash} from 'constants/hash';
import {Image} from 'expo-image';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../SignUp/styles';
import useAuth from '../useAuth';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as NavigationService from '@services/NavigationService';
type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>({mode: 'onChange'});
  const {isCheckBox, onCheck} = useAuth();
  const onSubmit = (data: FormData) => {
    // Handle sign-in logic here (e.g., API call to authenticate the user)
    Alert.alert('Success', `Welcome back, ${data.email}!`);
  };

  const goBack = () => NavigationService.goBack();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        {/* <MaterialIcons name="keyboard-backspace" size={24} color="black" onPress={goBack} /> */}
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
          rules={{
            required: 'Email is required',
            pattern: {value: /^\S+@\S+$/i, message: 'Invalid email format'},
          }}
          isEmail
          title="Email address"
          isValid={isValid}
          maxLength={50}
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
          isOther
        />
        <CustomPolicyText type="sign in" isChecked={isCheckBox} onCheck={onCheck} />
        <TouchableOpacity
          disabled={!isCheckBox}
          style={[styles.button, !isCheckBox && styles.disabelBtn]}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <SocialCustom type="sign in" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
