import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Colors from 'utils/Colors.util';
import Font from 'utils/Font.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';

interface CategoryOffersTabsProps {
  subCategories: any;
  selectedSubCategory: string;
  onCategorySelect: (category: string) => void;
  getOffers: (category: string) => void;
}

const AllKey = 'all';

const CategoryOffersTabs: React.FC<CategoryOffersTabsProps> = ({
  subCategories,
  selectedSubCategory,
  onCategorySelect,
  getOffers
}) => {
  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedSubCategory === AllKey && styles.selectedFilterButton
          ]}
          onPress={() => onCategorySelect(AllKey)}
        >
          <Text
            style={[
              styles.filterText,
              selectedSubCategory === AllKey && styles.selectedFilterText,
              Font.regular
            ]}
          >
            All Offers
          </Text>
        </TouchableOpacity>
        {subCategories.map((category: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,
              selectedSubCategory === category && styles.selectedFilterButton
            ]}
            onPress={() => onCategorySelect(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedSubCategory === category && styles.selectedFilterText,
                Font.regular
              ]}
            >
              {category?.text} ({getOffers(category?.id)})
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(10)
  },
  filterButton: {
    backgroundColor: Colors.GRAY,
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(12),
    marginHorizontal: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(35)
  },
  selectedFilterButton: {
    backgroundColor: Colors.JOOD_BLUE
  },
  filterText: {
    color: Colors.BLACK,
    fontSize: moderateScale(14)
  },
  selectedFilterText: {
    color: Colors.WHITE
  }
});

export default CategoryOffersTabs;
