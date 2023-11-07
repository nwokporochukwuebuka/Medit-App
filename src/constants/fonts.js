import {Platform} from 'react-native';
export default FONTS = {
  // HELVETICA:
  ...Platform.select({
    ios: {},
    android: {},
  }),
};
