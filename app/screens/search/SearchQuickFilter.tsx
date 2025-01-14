import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from 'utils/Colors.util';
import Font from 'utils/Font.util';
import { horizontalScale, moderateScale, verticalScale } from 'utils/Dimensions.util';
import { Recent, ArrowUp, Search } from 'assets/svgs';

interface RootState {
  app: { Searches: string[] };
}

const SearchQuickFilter: React.FC = () => {
  const recentSearches = useSelector((state: RootState) => state.app.Searches);
  const popularSearches = [
    'Kia Car',
    'The Guard Car Tinting and Protection',
    'Dip Master Protection & Car Services',
    'Car Accessories',
    'KBM Rental Car',
    'Volkswagen Car By Q-Auto',
    'Kia Car',
    'The Guard Car Tinting and Protection',
    'Dip Master Protection & Car Services',
    'Car Accessories',
    'KBM Rental Car',
    'Volkswagen Car By Q-Auto'
  ];
  const renderItem = (item: string, isRecent: boolean) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        {isRecent ? (
          <Recent width={horizontalScale(24)} height={verticalScale(24)} />
        ) : (
          <Search width={horizontalScale(24)} height={verticalScale(24)} />
        )}
      </View>
      <Text style={[styles.itemText, Font.regular]}>{item}</Text>
      <ArrowUp width={horizontalScale(24)} height={verticalScale(24)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => `recent-${index}`}
        renderItem={({ item }) => renderItem(item, true)}
        scrollEnabled={false}
      />
      <FlatList
        data={popularSearches}
        keyExtractor={(item, index) => `popular-${index}`}
        renderItem={({ item }) => renderItem(item, false)}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_WHITE,
    marginVertical: verticalScale(10)
  },
  header: {
    fontSize: moderateScale(18),
    color: Colors.BLACK,
    marginBottom: verticalScale(10)
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(10),
    borderBottomWidth: moderateScale(1.5),
    borderBottomColor: Colors.GRAY
  },
  iconContainer: {
    marginRight: horizontalScale(10)
  },
  itemText: {
    flex: 1,
    fontSize: moderateScale(16),
    color: Colors.BLACK
  }
});

export default SearchQuickFilter;
