import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PageHeader from 'components/PageHeader';
import { Gridblue, Gridgray, Lineblue, Linegray } from 'assets/svgs';
import { setGrid, setList } from 'store/reducers/app.reducer';
import { RootState } from 'store/store';
import { horizontalScale, verticalScale } from 'utils/Dimensions.util';
import { useNavigation } from 'expo-router';

const CategoriesHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isGrid = useSelector((state: RootState) => state.app.isGrid);

  const onGridPress = () => {
    dispatch(setGrid());
  };

  const onLinePress = () => {
    dispatch(setList());
  };

  return (
    <PageHeader title="Categories" onBackPress={() => {navigation.goBack()}}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onGridPress}>
          {isGrid ? (
            <Gridblue
              width={horizontalScale(24)}
              height={verticalScale(24)}
              style={styles.icon}
            />
          ) : (
            <Gridgray
              width={horizontalScale(24)}
              height={verticalScale(24)}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onLinePress} style={styles.iconSpacing}>
          {isGrid ? (
            <Linegray
              width={horizontalScale(24)}
              height={verticalScale(24)}
              style={styles.icon}
            />
          ) : (
            <Lineblue
              width={horizontalScale(24)}
              height={verticalScale(24)}
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
      </View>
    </PageHeader>
  );
};
const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconSpacing: {
    marginLeft: horizontalScale(15)
  },
  icon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain'
  }
});

export default CategoriesHeader;
