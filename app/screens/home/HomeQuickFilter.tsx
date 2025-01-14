import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { horizontalScale, verticalScale } from 'utils/Dimensions.util';
import { selectIsRTL } from 'store/reducers/auth-persist.reducer';
import { mockOfferTypesConfigurationAPI } from 'data/OfferTypes.data';
import { useFetchOfferTypesConfigurationQuery } from 'store/queries/home.query';
import HomeQuickFilterButton from './HomeQuickFilterButton';

const HomeQuickFilter: React.FC = () => {
  const isRTL = useSelector(selectIsRTL);
  const { data: items, error } = useFetchOfferTypesConfigurationQuery();

  const offerTypes = mockOfferTypesConfigurationAPI?.value;

  return (
    <View style={styles.container}>
      {(items?.value || offerTypes).map((i, index) => {
        const item = i?.fields || i;
        return item?.IsActive ? (
          <HomeQuickFilterButton
            key={index}
            index={index}
            category={item?.Category}
            text={isRTL ? item?.Title_Ar : item?.Title}
          />
        ) : (
          false
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(5)
  }
});

export default HomeQuickFilter;
