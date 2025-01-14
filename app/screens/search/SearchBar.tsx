import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  setKeyboardActive,
  setKeyboardInactive,
  addtoSearch
} from 'store/reducers/app.reducer';
import Colors, { alpha } from 'utils/Colors.util';
import Font from 'utils/Font.util';
import { verticalScale, horizontalScale, moderateScale } from 'utils/Dimensions.util';
import { search } from '../../assets/images/Pngs/index';
import i18n from 'i18n-translate';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      dispatch(addtoSearch(searchText));
      setSearchText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Image source={search} style={styles.icon} />
        <TextInput
          style={[styles.input, Font.regular]}
          placeholder={i18n.t('search')}
          placeholderTextColor={alpha(Colors.DARK_GRAY, 0.4)}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearchSubmit}
          onFocus={() => dispatch(setKeyboardActive())}
          onBlur={() => dispatch(setKeyboardInactive())}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15)
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: moderateScale(1),
    borderColor: alpha(Colors.DARK_GRAY, 0.3),
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(10)
  },
  icon: {
    marginRight: horizontalScale(10),
    width: horizontalScale(25),
    height: verticalScale(25),
    tintColor: Colors.DARK_GRAY
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    color: Colors.BLACK,
    paddingVertical: verticalScale(10),
    minHeight: verticalScale(45)
  }
});

export default SearchBar;
