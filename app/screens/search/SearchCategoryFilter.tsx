import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { moderateScale, verticalScale } from 'utils/Dimensions.util';
import categories from 'data/Categories.data';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import i18n from 'i18n-translate';
import SearchCategoryCard from './SearchCategoryCard';

const SearchCategoryFilter: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, Font.semiBold]}>{i18n.t('what')}</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <SearchCategoryCard
            id={item.id}
            icon={item.icon}
            text={item.text}
            backgroundColor={item.backgroundColor}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(10),
    backgroundColor: Colors.BG_WHITE,
    paddingVertical: verticalScale(15),
    marginBottom: verticalScale(-20)
  },
  text: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(20)
  },
  listContainer: {}
});

export default SearchCategoryFilter;
