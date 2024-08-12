import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Controller, Control} from 'react-hook-form';
import styles from './styles';

type FormInputProps = {
  control: Control<any>; // The form control
  name: string; // The name of the input field
  rules?: object; // Validation rules
  placeholder: string; // Placeholder text for the input field
  secureTextEntry?: boolean; // Whether to hide the input text (e.g., for passwords)
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'; // The keyboard type
};

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}: FormInputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextInput
              style={[styles.input, error && {borderColor: 'red'}]}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default FormInput;
