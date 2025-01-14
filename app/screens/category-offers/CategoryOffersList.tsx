import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Colors from 'utils/Colors.util';
import { verticalScale, moderateScale } from 'utils/Dimensions.util';
import i18n from 'i18n-translate';
import CategoryOfferListItem from './CategoryOfferListItem';

interface CategoryListProps {
  data: any[];
  loadMoreData: () => void;
  isLoading: boolean;
}

const CategoryOffersList: React.FC<CategoryListProps> = ({
  data,
  loadMoreData,
  isLoading
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({ item }) => <CategoryOfferListItem item={item} />}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<Text style={styles.emptyText}>{i18n.t('noItemsFound')}</Text>}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: verticalScale(10),
    alignItems: 'stretch',
    minHeight: '98%'
  },
  emptyText: {
    fontSize: moderateScale(16),
    color: Colors.DARK_GRAY,
    textAlign: 'center',
    marginTop: verticalScale(20)
  }
});

export default CategoryOffersList;
