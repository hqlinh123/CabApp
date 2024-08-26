export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[\S]{8,}$/;
export const VALIDATE_PASSWORD_RULES = {
  required: 'Password is required',
  pattern: {
    value: passwordPattern,
    message:
      'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.',
  },
};

export const VALIDATE_EMAIL_RULES = {
  required: 'Email is required',
  pattern: {value: emailPattern, message: 'Please enter a valid email address.'},
};
