// Import libraries
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FormInput from 'components/FormInput';
import {blurhash} from 'constants/hash';
import {VALIDATE_EMAIL_RULES} from 'constants/regx';
import {Image} from 'expo-image';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useAuth from '../useAuth';
// Create a component
const ForgotPassword = () => {
  // Initialize form handling with React Hook Form
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm();
  const {goBack} = useAuth();
  // Function to handle form submission
  const onSubmit = data => {
    // In a real app, you would handle the password reset request here
    Alert.alert('Password Reset Link Sent', `A link to reset your password has been sent to ${data.email}`, [
      {text: 'OK', onPress: goBack},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <MaterialIcons name="keyboard-backspace" size={24} color="black" onPress={goBack} />
        <Image
          style={styles.image}
          source="https://jumpgrowth.com/wp-content/uploads/2022/01/TaxiApp1.png"
          placeholder={{blurhash}}
          contentFit="cover"
        />
        <Text style={styles.title}>Forgot Password</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#016B45',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#016B45',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

// Make this component available to the app
export default ForgotPassword;
