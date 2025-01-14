import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Colors from 'utils/Colors.util';
import { vw, horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import { Logo, Menu, Notifications } from 'assets/svgs';
// import useMicrosoftAuth from 'hooks/useMicrosoftAuth';

const HomeHeader: React.FC = () => {
  // const { microsoft } = useMicrosoftAuth();

  const handleMicrosoftAuth = async () => {
    // try {
    //   await microsoft.onAuth();
    // } catch (error) {
    //   Alert.alert('Authentication Error', 'Something went wrong during authentication.');
    //   console.error('Microsoft Auth Error:', error);
    // }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Menu
          width={horizontalScale(26)}
          height={verticalScale(26)}
          onPress={handleMicrosoftAuth}
        />
      </TouchableOpacity>
      <Logo width={vw(75)} />
      <TouchableOpacity>
        <Notifications width={horizontalScale(26)} height={verticalScale(26)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: moderateScale(10),
    backgroundColor: Colors.WHITE,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15)
  }
});

export default HomeHeader;
