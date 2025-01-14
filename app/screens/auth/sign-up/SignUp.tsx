import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { Tree } from '../../../assets/images/Pngs/index';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
// import useMicrosoftAuth from 'hooks/useMicrosoftAuth';

const SignUp: React.FC = () => {
  // const { microsoft } = useMicrosoftAuth();

  const handleMicrosoftAuth = async () => {
    // try {
    //   await microsoft.onAuth();
    // } catch (error) {
    //   Alert.alert('Authentication Error', 'Something went wrong during authentication.');
    //   console.error('Microsoft Auth Error:', error);
    // }
  };

  return (
    <View style={styles.container}>
      <Image source={Tree} style={styles.treeImage} />

      <Text style={[styles.title, Font.semiBold]}>Sign in</Text>

      <TextInput
        style={[styles.input, Font.medium]}
        placeholder="Email address, phone number or Skype"
        placeholderTextColor={Colors.GRAY}
        keyboardType="email-address"
      />

      <TouchableOpacity>
        <Text style={[styles.linkText, Font.medium]}>
          Can&&apos;t access your account?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleMicrosoftAuth}>
        <Text style={[styles.buttonText, Font.bold]}>Next</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={[styles.infoText, Font.regular]}>
          Qatar Foundation (QF) is a non-profit organization that works in education,
          research, and community development. Together with 50 entities under its
          umbrella, QF is driving regional innovation and entrepreneurship, fostering
          social development, and preparing our brightest minds to tackle tomorrow&apos;s
          biggest challenges today.
        </Text>
      </View>

      <TouchableOpacity style={styles.signInOptions}>
        <Ionicons name="key-outline" size={moderateScale(20)} color={Colors.BLACK} />
        <Text style={[styles.signInOptionsText, Font.medium]}>Sign-in options</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center'
  },
  treeImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
    marginBottom: verticalScale(10),
    resizeMode: 'contain',
    marginLeft: horizontalScale(8)
  },
  title: {
    fontSize: moderateScale(24),
    marginBottom: verticalScale(20),
    color: Colors.BLACK,
    marginLeft: horizontalScale(8)
  },
  input: {
    borderBottomWidth: moderateScale(1),
    borderColor: Colors.DARK_BLUE,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginBottom: verticalScale(20),
    fontSize: moderateScale(16),
    color: Colors.WHITE
  },
  button: {
    backgroundColor: Colors.DARK_BLUE,
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    marginBottom: verticalScale(15)
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(16)
  },
  linkText: {
    color: Colors.DARK_BLUE,
    marginBottom: verticalScale(20)
  },
  infoBox: {
    borderWidth: moderateScale(1),
    borderColor: Colors.GRAY,
    borderRadius: moderateScale(5),
    padding: moderateScale(15),
    backgroundColor: Colors.GRAY,
    marginBottom: verticalScale(20)
  },
  infoText: {
    fontSize: moderateScale(14),
    color: Colors.BLACK
  },
  signInOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10)
  },
  signInOptionsText: {
    fontSize: moderateScale(16),
    color: Colors.DARK_BLUE,
    marginLeft: horizontalScale(8)
  }
});

export default SignUp;
