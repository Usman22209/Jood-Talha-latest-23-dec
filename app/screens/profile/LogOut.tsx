import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import { Logout } from 'assets/svgs';
import i18n from 'i18n-translate';

const LogOut: React.FC = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Logout height={verticalScale(35)} width={horizontalScale(35)} style={style.icon} />
      <Text style={[style.text, Font.regular]}>{i18n.t('logout')}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(7),
    marginVertical: verticalScale(10)
  },
  text: {
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(10),
    color: Colors.RED
  },
  icon: {
    marginLeft: horizontalScale(5),
    marginRight: horizontalScale(5)
  }
});

export default LogOut;
