import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { OfferFetchKeys } from 'hooks/useGetOffers';
import Font from 'utils/Font.util';
import Colors, { alpha } from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';

interface HomeQuickFilterButtonProps {
  index: number;
  category: string;
  text: string;
}

const HomeQuickFilterButton: React.FC<HomeQuickFilterButtonProps> = ({
  index,
  category,
  text
}) => {
  const navigation = useNavigation();

  const getColor = (index: number): string => {
    const colors = [
      alpha(Colors.JOOD_BLUE, 0.15),
      alpha(Colors.JOOD_PINK, 0.2),
      alpha(Colors.JOOD_GREEN, 0.3),
      alpha(Colors.JOOD_ORANGE, 0.2)
    ];
    return colors[index % colors.length];
  };

  const handlePress = () => {
    // Fetch Offer List based on what is being requested
    let params = {};

    if (category === 'recently added') {
      params = {
        fetchKey: OfferFetchKeys.RECENTLY_ADDED
      };
    } else if (category === 'most visited') {
      params = {
        fetchKey: OfferFetchKeys.MOST_VISITED
      };
    } else {
      params = {
        fetchKey: OfferFetchKeys.OFFER_GROUP,
        fetchParam: category
      };
    }

    // @ts-expect-error : Even though navigation is working, types are mismatching
    navigation.navigate('Home_Offers', {
      name: text,
      hideTabs: true,
      ...params
    });
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getColor(index) }]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, Font.regular]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: verticalScale(5),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexBasis: '45%',
    marginBottom: verticalScale(10),
    marginRight: horizontalScale(10)
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20
  }
});

export default HomeQuickFilterButton;
