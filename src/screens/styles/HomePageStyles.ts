import {Dimensions, StyleSheet} from 'react-native';

const {fontScale, height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
  },
  backgroundContents: {
    marginTop: height * 0.1,
    alignItems: 'center',
  },
  headerTextContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: 'bold',
    fontSize: fontScale * 16,
    letterSpacing: 5,
    marginTop: 5,
  },
  welcomeImage: {
    marginTop: height * 0.08,
    transform: [{scale: 0.9}],
  },
  footerContainer: {marginTop: height * 0.1},
  footerTextOne: {
    fontWeight: 'bold',
    fontSize: fontScale * 28,
    color: '#3F414E',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue UltraLight',
  },
  footerTextContainer: {
    width: width * 0.8,
    padding: 10,
  },
  footerTextTwo: {
    textAlign: 'center',
    marginTop: height * 0.03,
    color: '#A1A4B2',
    fontSize: fontScale * 16,
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '400',
  },
  footerTextThree: {
    color: '#A1A4B2',
    fontFamily: 'Helvetica Neue UltraLight',
    fontWeight: '600',
  },
  footerTextThreeContainer: {
    marginTop: 5,
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
