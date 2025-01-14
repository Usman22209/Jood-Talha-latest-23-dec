import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { join } from 'lodash';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import { selectIsRTL } from 'store/reducers/auth-persist.reducer';
import StarRating from 'components/StarRating';
import Image from 'components/Image';
import { PlaceholderJoodBW } from 'assets/svgs';

const OfferCard: React.FC<any> = ({ item }) => {
  const isRTL = useSelector(selectIsRTL);

  const getCategory = useCallback(() => {
    const categoryList = [
      isRTL ? item?.L1Category?.Arabic || '' : item?.L1Category?.Categories || '',
      isRTL ? item?.L2Categories?.Arabic || '' : item?.L2Categories?.subCategories || ''
      // isRTL
      //   ? item?.L3Categories?.Arabic || ''
      //   : item?.L3Categories?.subSubCategories || ''
    ];
    return join(
      categoryList.filter((category) => category),
      ' - '
    );
  }, [isRTL, item]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.offerImageContainer}>
        <Image style={styles.offerImage} Placeholder={PlaceholderJoodBW} />
      </View>

      <View style={styles.infoBox}>
        <Text style={[styles.category, Font.regular]}>{getCategory()}</Text>
        <Text style={[styles.vendorName, Font.medium]}>
          {item?.Vendor?.Vendor_x002f_Branch_x0020_Name}
        </Text>
        <StarRating rating={item?.Rating || 0} />
        <Text style={[styles.discount, Font.regular]}>{item?.offer0}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  offerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  offerImage: {
    paddingRight: horizontalScale(10),
    width: horizontalScale(90),
    height: verticalScale(90),
    position: 'relative',
    objectFit: 'contain'
  },
  infoBox: {
    flex: 1,
    flexDirection: 'column',
    gap: 8
  },
  category: {
    fontSize: moderateScale(12),
    color: Colors.WHITE,
    backgroundColor: Colors.JOOD_BLUE,
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(8),
    borderRadius: moderateScale(4),
    alignSelf: 'flex-start'
  },
  vendorName: {
    fontSize: moderateScale(18)
  },
  discount: {
    fontSize: moderateScale(14),
    color: Colors.BLACK
  },
  icon: {
    resizeMode: 'contain'
  }
});

export default OfferCard;
