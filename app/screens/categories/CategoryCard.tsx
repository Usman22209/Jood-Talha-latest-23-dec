import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useSelector } from 'react-redux';
import { OfferFetchKeys } from 'hooks/useGetOffers';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { RootState } from 'store/store';
import { horizontalScale, moderateScale, verticalScale } from 'utils/Dimensions.util';

interface CategoryCardProps {
  id: number;
  icon: React.ComponentType<any>;
  text: string;
  backgroundColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  icon: Icon,
  text,
  backgroundColor
}) => {
  const isGrid = useSelector((state: RootState) => state.app.isGrid);
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
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isGrid ? styles.gridCardContainer : styles.inlineCardContainer
      ]}
      onPress={handlePress}
    >
      <View
        style={[
          styles.card,
          { backgroundColor },
          isGrid ? styles.gridCard : styles.inlineCard
        ]}
      >
        <Icon
          width={horizontalScale(70)}
          height={verticalScale(70)}
          style={styles.icon}
        />
        {!isGrid && <Text style={[styles.textInsideCard, Font.regular]}>{text}</Text>}
      </View>
      {isGrid && <Text style={[styles.text, Font.regular]}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  gridCardContainer: {
    width: '30%',
    alignItems: 'center'
  },
  inlineCardContainer: {
    width: '100%',
    alignSelf: 'center'
  },
  card: {
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridCard: {
    width: '100%',
    height: verticalScale(100)
  },
  inlineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: horizontalScale(10),
    height: verticalScale(90)
  },
  icon: {
    marginBottom: verticalScale(10)
  },
  text: {
    color: Colors.BLACK,
    fontSize: 10,
    textAlign: 'center',
    marginTop: verticalScale(8)
  },
  textInsideCard: {
    color: Colors.BLACK,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: horizontalScale(10)
  }
});

export default CategoryCard;
