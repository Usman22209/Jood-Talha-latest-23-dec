import React from 'react';
import { useNavigation } from 'expo-router';
import ScreenWrapper from 'components/common/ScreenWrapper';
import PageHeader from 'components/PageHeader';
import { StyleSheet, Text, View } from 'react-native';
import Colors from 'utils/Colors.util';
import Image from 'components/Image';
import { JoodLogo } from 'assets/svgs';
import { horizontalScale, moderateScale, verticalScale } from 'utils/Dimensions.util';
import i18n from 'i18n-translate';
import Font from 'utils/Font.util';

const About: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper
      header={
        <PageHeader
          title={i18n.t('about')}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
      }
    >
      <View style={styles.container}>
        <Image style={styles.offerImage} Placeholder={JoodLogo} />
        <Text style={[styles.text, Font.regular]}>{i18n.t('aboutDetail')}</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.BLACK_TEXT,
    lineHeight: moderateScale(24),
    marginHorizontal: horizontalScale(20)
  },
  offerImage: {
    width: horizontalScale(90),
    height: verticalScale(90),
    position: 'relative',
    objectFit: 'contain'
  }
});

export default About;
