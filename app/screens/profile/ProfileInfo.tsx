import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Info, Mail, Call, Encrypted } from 'assets/svgs';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import i18n from 'i18n-translate';
import { useNavigation } from 'expo-router';

export default function ProfileInfo({ userData }: any) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate("About")}
      >
        <Info
          style={styles.icon}
          width={horizontalScale(24)}
          height={verticalScale(24)}
        />
        <Text style={[styles.text, Font.regular]}>{i18n.t('about')}</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Encrypted
          style={styles.icon}
          width={horizontalScale(24)}
          height={verticalScale(24)}
        />
        <Text style={[styles.text, Font.regular]}>{i18n.t('privacy')}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.section2}>
          <Mail
            style={styles.icon}
            width={horizontalScale(24)}
            height={verticalScale(24)}
          />
          <Text style={[styles.text, Font.regular]}>
            {userData?.mail || i18n.t('email')}
          </Text>
        </View>
        <View style={styles.section2}>
          <Call
            style={styles.icon}
            width={horizontalScale(24)}
            height={verticalScale(24)}
          />
          <Text style={[styles.text, Font.regular]}>+974 4454 0000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(10)
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: moderateScale(0.7)
  },
  icon: {
    marginRight: horizontalScale(10)
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.BLACK
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section2: {
    marginTop: verticalScale(5),
    flexDirection: 'row',
    paddingVertical: verticalScale(10)
  }
});
