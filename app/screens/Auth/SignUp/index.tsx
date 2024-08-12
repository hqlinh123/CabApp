import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import styles from './styles';
import FormInput from 'components/FormInput';
import * as NavigationService from '@services/NavigationService';
import {SCREENS} from 'constants/screenKeys';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {control, handleSubmit, watch} = useForm<FormData>();

  const password = watch('password');

  const onSubmit = (data: FormData) => {
    // Handle sign-up logic here (e.g., API call to register the user)
    Alert.alert('Success', `Welcome to E-Bike, ${data.fullName}!`);
    NavigationService.navigate(SCREENS.SIGN_IN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up to E-Bike</Text>

      <FormInput
        control={control}
        name="fullName"
        placeholder="Full Name"
        rules={{required: 'Full Name is required'}}
      />

      <FormInput
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
        rules={{
          required: 'Email is required',
          pattern: {value: /^\S+@\S+$/i, message: 'Invalid email format'},
        }}
      />

      <FormInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
        rules={{required: 'Password is required'}}
      />

      <FormInput
        control={control}
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry
        rules={{
          required: 'Confirm Password is required',
          validate: value => value === password || 'Passwords do not match',
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
