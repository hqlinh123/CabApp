import FormInput from 'components/FormInput';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from '../SignUp/styles';
type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {control, handleSubmit} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle sign-in logic here (e.g., API call to authenticate the user)
    Alert.alert('Success', `Welcome back, ${data.email}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In to E-Bike</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
