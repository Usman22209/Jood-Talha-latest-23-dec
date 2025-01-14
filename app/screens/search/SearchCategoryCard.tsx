import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { OfferFetchKeys } from 'hooks/useGetOffers';
import { moderateScale, verticalScale, horizontalScale } from 'utils/Dimensions.util';
import Colors from 'utils/Colors.util';
import Font from 'utils/Font.util';

interface CategoryCardProps {
  id: number;
  icon: React.ComponentType<any>;
  text: string;
  backgroundColor: string;
}

const SearchCategoryCard: React.FC<CategoryCardProps> = ({
  id,
  icon: Icon,
  text,
  backgroundColor
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // @ts-expect-error : Even though navigation is working, types are mismatching
    navigation.navigate('Home_Offers', {
      name: text,
      fetchKey: OfferFetchKeys.L1_CATEGORY,
      fetchParam: id
    });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={[styles.iconBox, { backgroundColor }]}>
        <Icon width={horizontalScale(70)} height={verticalScale(70)} />
      </View>
      <Text style={[styles.text, Font.regular]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-start',
    marginRight: horizontalScale(8)
  },
  iconBox: {
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(83),
    height: verticalScale(83),
    marginBottom: verticalScale(12)
  },
  text: {
    color: Colors.BLACK,
    fontSize: moderateScale(11),
    textAlign: 'center',
    width: horizontalScale(80)
  }
});

export default SearchCategoryCard;
