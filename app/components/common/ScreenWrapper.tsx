import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, ViewStyle } from 'react-native';
import Colors, { alpha } from 'utils/Colors.util';
import { horizontalScale } from 'utils/Dimensions.util';

interface ScreenWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
  header: ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, style, header }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={alpha(Colors.JOOD_BLUE, 0.3)} barStyle="dark-content" />
      {header}
      <ScrollView style={styles.innerContainer}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.BG_WHITE
  }
});

export default ScreenWrapper;
