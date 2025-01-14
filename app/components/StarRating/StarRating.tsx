import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'utils/Dimensions.util';
import { Starhalf, StarFull, StarEmpty } from 'assets/svgs';

type Props = {
  rating: any;
};

const StarRating = ({ rating = 0 }: Props) => {
  const fullStars = Math.floor(rating) || 0;
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      {[...Array(fullStars)].map((_, index) => (
        <StarFull
          key={`full-${index}`}
          width={moderateScale(16)}
          height={moderateScale(16)}
        />
      ))}
      {hasHalfStar && <Starhalf width={moderateScale(24)} height={moderateScale(24)} />}
      {[...Array(emptyStars)].map((_, index) => (
        <StarEmpty
          key={`empty-${index}`}
          width={moderateScale(24)}
          height={moderateScale(24)}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default StarRating;
