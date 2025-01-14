import React from 'react';
import { View, StyleSheet } from 'react-native';
import categories from 'data/Categories.data';
import { verticalScale } from 'utils/Dimensions.util';
import ScreenWrapper from 'components/common/ScreenWrapper';
import { useFetchCategoriesQuery } from 'store/queries/home.query';
import CategoriesHeader from './CategoriesHeader';
import CategoryCard from './CategoryCard';

const Categories: React.FC = () => {
  const { data: items } = useFetchCategoriesQuery();

  console.log('items ', items);

  return (
    <ScreenWrapper header={<CategoriesHeader />}>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            id={category.id}
            icon={category.icon}
            text={category.text}
            backgroundColor={category.backgroundColor}
          />
        ))}
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: verticalScale(15),
    marginTop: verticalScale(20)
  }
});

export default Categories;
