import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  textSize?: number;
  topHeight?: number;
  bottomHeight?: number;
  radius?: number;
  buttonHeight?: number;
  bold?: boolean;
  fontFamily?: string;
  width?: number;
  borderWidth?: number;
  boderColor?: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  textColor,
  textSize,
  topHeight,
  bottomHeight,
  radius,
  buttonHeight,
  bold,
  fontFamily,
  onPress,
  borderWidth,
  boderColor,
  width,
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor ? backgroundColor : 'transparent',
          opacity: disabled ? 0.4 : 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: buttonHeight,
          borderRadius: radius,
          borderWidth: borderWidth,
          borderColor: boderColor,
          marginTop: topHeight,
          width: width,
          marginBottom: bottomHeight || 0,
        }}
        disabled={disabled}>
        <Text
          style={{
            fontFamily: fontFamily,
            color: textColor,
            fontSize: textSize,
            fontWeight: bold ? 'bold' : 'normal',
          }}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
