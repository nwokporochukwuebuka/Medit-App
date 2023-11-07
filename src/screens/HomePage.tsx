import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Button from '../components/UI/Button';

import Frame from '../../assets/images/Frame.svg';
import Group from '../../assets/images/Group.svg';
import Welcome from '../../assets/images/Welcome.svg';

import styles from './styles/HomePageStyles';

const {fontScale, height, width} = Dimensions.get('window');

const HomePage: React.FC<{navigation: any; route: any}> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <Frame />
      </View>
      <View style={styles.backgroundContents}>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.headerText, {marginRight: 8}]}>Silent</Text>
          <Group />
          <Text style={[styles.headerText, {marginLeft: 8}]}>Moon</Text>
        </View>
        <View style={styles.welcomeImage}>
          <Welcome />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerTextOne}>We are what we do</Text>
          <Text style={styles.footerTextTwo}>
            Thousands of people are using silent moon for small meditation
          </Text>
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            backgroundColor="#8E97FD"
            topHeight={height * 0.05}
            bottomHeight={height * 0.013}
            radius={30}
            textSize={fontScale * 15}
            textColor="#fff"
            buttonHeight={height * 0.07}
            fontFamily="Helvetica Neue UltraLight"
            bold>
            SIGN UP
          </Button>
          <View style={styles.footerTextThreeContainer}>
            <Text style={styles.footerTextThree}>
              ALREADY HAVE AN ACCOUNT ?{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.footerTextFour}>LOGIN</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
