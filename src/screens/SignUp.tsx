import {Alert, Dimensions, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';

import Background from '../../assets/images/Background.svg';
import Google from '../../assets/images/Google.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Button from '../components/UI/Button';
import styles from './styles/SignUpStyles';
import {Formik} from 'formik';
import SignUpSchema from '../config/SignUpSchema';

const {height, width} = Dimensions.get('window');

const SignUp: React.FC<{navigation: any}> = ({navigation}) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Background />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.arrowContainer}>
          <Ionicons
            name="arrow-back-sharp"
            size={25}
            color="#3F414E"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Create your account</Text>
          <Button
            backgroundColor="#7583CA"
            textColor="#fff"
            fontFamily="Helvetica Neue UltraLight"
            buttonHeight={height * 0.07}
            topHeight={height * 0.04}
            width={width * 0.9}
            radius={35}
            onPress={() => console.log('Sign Up with Facebook')}>
            <View style={styles.facebookButtonContainer}>
              <Zocial
                name="facebook"
                size={20}
                color={'white'}
                style={{marginRight: 20}}
              />
              <Text style={styles.buttonOne}>CONTINUE WITH FACEBOOK</Text>
            </View>
          </Button>
          <Button
            onPress={() => console.log('I clicked on Google')}
            buttonHeight={height * 0.07}
            topHeight={height * 0.04}
            width={width * 0.9}
            radius={35}
            boderColor="#EBEAEC"
            borderWidth={1.2}>
            <View style={styles.facebookButtonContainer}>
              <Text style={{marginTop: 7}}>
                <Google />
              </Text>
              <Text style={styles.buttonTwo}>CONTINUE WITH GOOGLE</Text>
            </View>
          </Button>
        </View>

        <View style={styles.loginEmail}>
          <Text style={styles.loginEmailText}>OR LOGIN WITH EMAIL</Text>
        </View>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={SignUpSchema}
          onSubmit={values => Alert.alert(JSON.stringify(values))}>
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View
                style={[
                  styles.inputContainerStyles,
                  {marginVertical: height * 0.015},
                ]}>
                <TextInput
                  placeholder="Name"
                  style={styles.inputStyle}
                  value={values.name}
                  autoCapitalize="sentences"
                  autoCorrect={false}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />
                {touched.name && errors.name && (
                  <FontAwesome6 name="xmark" color="red" size={20} />
                )}
                {touched.name && !errors.name && (
                  <View>
                    <FontAwesome name="check" color="#6CB28E" size={20} />
                  </View>
                )}
              </View>
              <View
                style={[
                  styles.inputContainerStyles,
                  {marginVertical: height * 0.01},
                ]}>
                <TextInput
                  placeholder="Email Address"
                  style={styles.inputStyle}
                  value={values.email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <View>
                    <FontAwesome6 name="xmark" color="red" size={20} />
                  </View>
                )}
                {touched.email && !errors.email && (
                  <View>
                    <FontAwesome name="check" color="#6CB28E" size={20} />
                  </View>
                )}
              </View>
              <View
                style={[
                  styles.inputContainerStyles,
                  {marginVertical: height * 0.01},
                ]}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  style={styles.inputStyle}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={25}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}
              <View style={styles.policyTextContainer}>
                <Text style={styles.policyText}>
                  I have read the{' '}
                  <Text style={{color: '#7583CA'}}>privacy policy</Text>
                </Text>
                <CheckBox
                  isChecked={isChecked}
                  checkBoxColor="#A1A4B2"
                  onClick={() => setIsChecked(!isChecked)}
                  style={styles.checkbox}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Button
                  onPress={() => handleSubmit()}
                  backgroundColor="#8E97FD"
                  textColor="#fff"
                  fontFamily="Helvetica Neue UltraLight"
                  buttonHeight={height * 0.07}
                  topHeight={height * 0.04}
                  width={width * 0.9}
                  radius={35}
                  disabled={!isValid}
                  bold>
                  GET STARTED
                </Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;
