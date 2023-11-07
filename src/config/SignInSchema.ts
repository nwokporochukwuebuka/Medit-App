import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address!'),

  password: Yup.string()
    .min(5, 'Confirm password must be 8 characters long.')
    .required('Please enter your password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Your password must contain at least one uppercase, lowercase, number and a special character',
    ),
});

export default SignInSchema;
