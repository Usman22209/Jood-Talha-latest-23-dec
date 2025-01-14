import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Font from 'utils/Font.util';
import Colors, { alpha } from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import { QatarLogo, SquareLogo } from 'assets/svgs';
import { mockGetUserAPI } from 'data/Profile.data';

export default function ProfileECard({ userData }: any) {
  const user = userData || mockGetUserAPI;

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.logos}>
        <QatarLogo width={horizontalScale(65)} height={verticalScale(65)} />
        <SquareLogo width={horizontalScale(65)} height={verticalScale(65)} />
      </View>
      <View style={styles.info}>
        <Text style={[styles.name, Font.medium]}>{user?.displayName}</Text>
        <Text style={[styles.subTexts, Font.regular]}>
          {user?.employeeId || '000000'}
        </Text>
        {user?.jobTitle && (
          <Text style={[styles.subTexts, Font.regular]}>{user?.jobTitle}</Text>
        )}
        {user?.department && (
          <Text style={[styles.subTexts, Font.regular]}>{user?.department || ''}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    borderRadius: moderateScale(12),
    overflow: 'hidden',
    backgroundColor: alpha(Colors.DARK_GRAY, 0.15),
    paddingHorizontal: moderateScale(12),
    paddingTop: verticalScale(8)
  },
  logos: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: verticalScale(10),
    gap: horizontalScale(10)
  },
  info: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(8)
  },
  name: {
    fontSize: moderateScale(19),
    marginBottom: verticalScale(7),
    color: Colors.BLACK
  },
  subTexts: {
    fontSize: moderateScale(13),
    marginBottom: verticalScale(6),
    color: Colors.BLACK
  }
});
