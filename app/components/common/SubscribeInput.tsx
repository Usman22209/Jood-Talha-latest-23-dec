import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import i18n from 'i18n-translate';
import { BlackMail } from 'assets/svgs';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import Font from 'utils/Font.util';

const SubscribeInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <BlackMail
          width={horizontalScale(22)}
          height={verticalScale(22)}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, Font.medium]}
          placeholder="Email Address"
          placeholderTextColor={Colors.GRAY}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, Font.medium]}>{i18n.t('subscribe')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(9),
    width: '90%'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  icon: {
    marginLeft: horizontalScale(10)
  },
  input: {
    flex: 1,
    height: '100%',
    paddingLeft: horizontalScale(10),
    fontSize: moderateScale(16)
  },
  button: {
    backgroundColor: Colors.JOOD_BLUE,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(9),
    margin: moderateScale(1)
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(16)
  }
});

export default SubscribeInput;
