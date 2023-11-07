import {Dimensions, StyleSheet} from 'react-native';

const {fontScale, height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
  },
  bodyContainer: {marginTop: height * 0.04},
  arrowContainer: {
    borderWidth: 1,
    borderColor: '#EBEAEC',
    alignSelf: 'flex-start',
    borderRadius: 50,
    padding: 15,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: height * 0.035,
  },
  headerText: {
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: 'bold',
    fontSize: fontScale * 28,
    color: '#3F414E',
  },
  buttonOne: {
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 7,
    color: '#fff',
  },
  buttonTwo: {
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 7,
    color: '#3F414E',
  },
  loginEmail: {marginTop: height * 0.03, marginBottom: height * 0.015},
  loginEmailText: {
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: 'bold',
    color: '#A1A4B2',
    textAlign: 'center',
  },
  inputStyle: {
    flex: 0.8,
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.07,
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '600',
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0d10',
    paddingHorizontal: width * 0.05,
  },
  policyText: {
    fontFamily: 'Helvetica Neue UltraLight',
    marginHorizontal: width * 0.05,
    fontWeight: '400',
    color: '#A1A4B2',
  },
  facebookButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerStyles: {
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: height * 0.01,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2F3F7',
  },
  policyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.025,
  },
  checkbox: {
    marginHorizontal: width * 0.07,
    transform: [{scale: 1.2}],
  },
  forgotPassword: {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '500',
    fontSize: fontScale * 15,
    marginTop: 15,
    color: '#3F414E',
  },
  footerTextThree: {
    color: '#A1A4B2',
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '600',
  },
  footerTextThreeContainer: {
    marginTop: height * 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerTextFour: {
    color: '#8E97FD',
    fontWeight: '400',
    fontFamily: 'Helvetica Neue UltraLight',
  },
});

export default styles;
