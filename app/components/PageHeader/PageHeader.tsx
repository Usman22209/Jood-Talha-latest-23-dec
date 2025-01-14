import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Font from 'utils/Font.util';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
  children?: ReactNode;
}

const PageHeader: React.FC<HeaderProps> = ({ title, onBackPress, children }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Page Back Button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={moderateScale(24)} color={Colors.BLACK} />
      </TouchableOpacity>

      {/* Page Title */}
      <Text style={[styles.title, Font.regular]}>{title}</Text>

      {/* For other actions in header */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    backgroundColor: Colors.WHITE
  },
  backButton: {
    marginRight: horizontalScale(15)
  },
  title: {
    fontSize: moderateScale(20),
    flex: 1,
    textAlign: 'left'
  }
});

export default PageHeader;
