import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from 'utils/Dimensions.util';
import Colors from 'utils/Colors.util';
import Font from 'utils/Font.util';
import { Leading } from 'assets/svgs';
import i18n from 'i18n-translate';

const SearchPopularFilter: React.FC = () => {
  const recentSearches = [
    '50%',
    'Car Dealers',
    'Sale',
    'Hilton Salwa',
    'Desert Falls',
    'Nursery'
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.header, Font.semiBold]}>{i18n.t('popular')}</Text>
      <View style={styles.searchesContainer}>
        {recentSearches.map((item, index) => (
          <View key={index} style={styles.searchTag}>
            <Leading
              width={horizontalScale(20)}
              height={verticalScale(20)}
              style={styles.icon}
            />
            <Text style={[styles.text, Font.regular]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
    backgroundColor: Colors.BG_WHITE,
    paddingVertical: verticalScale(15)
  },
  header: {
    fontSize: moderateScale(18),
    color: Colors.BLACK,
    marginBottom: verticalScale(10)
  },
  searchesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  searchTag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(64),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(10),
    borderWidth: moderateScale(1.5),
    borderColor: Colors.DARK_GRAY
  },
  icon: {
    marginRight: horizontalScale(5)
  },
  text: {
    fontSize: moderateScale(14),
    color: Colors.DARK_GRAY
  }
});

export default SearchPopularFilter;
