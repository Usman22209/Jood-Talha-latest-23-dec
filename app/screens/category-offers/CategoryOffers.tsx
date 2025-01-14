import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { find, size } from 'lodash';
import { OfferFetchKeys, useGetOffers } from 'hooks/useGetOffers';
import PageHeader from 'components/PageHeader';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale } from 'utils/Dimensions.util';
import categories from 'data/Categories.data';
import CategoryOffersTabs from './CategoryOffersTabs';
import CategoryOffersList from './CategoryOffersList';

type CategoryOffersProps = any;

const CategoryOffers: React.FC<CategoryOffersProps> = ({ route }) => {
  const navigation = useNavigation<CategoryOffersProps['navigation']>();
  const { name, fetchParam, hideTabs } = route.params;

  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  const getAllOffers = useGetOffers(OfferFetchKeys.L1_CATEGORY); // L1
  const getSubOffers = useGetOffers(OfferFetchKeys.L2_CATEGORY); // L1

  const getSubCategories = () => {
    const results = find(categories, ['id', fetchParam])?.subCategories;
    return results;
  };

  const getList = (key: string) => {
    if (key === 'all') {
      return getAllOffers(fetchParam);
    } else return getSubOffers(key);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader title={name} onBackPress={() => navigation.goBack()} />
      <View style={styles.container}>
        {hideTabs ? (
          false
        ) : (
          <CategoryOffersTabs
            subCategories={getSubCategories()}
            selectedSubCategory={selectedSubCategory}
            onCategorySelect={(category: any) => setSelectedSubCategory(category?.id)}
            getOffers={(categoryId) => {
              const result = getList(categoryId);
              return size(result);
            }}
          />
        )}

        <CategoryOffersList
          data={getList(selectedSubCategory)}
          loadMoreData={() => {}}
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: horizontalScale(15)
  },
  container: {
    backgroundColor: Colors.BG_WHITE,
    padding: verticalScale(10)
  }
});

export default CategoryOffers;
