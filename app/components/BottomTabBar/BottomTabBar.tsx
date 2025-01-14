import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from 'utils/Colors.util';
import { horizontalScale, verticalScale, moderateScale } from 'utils/Dimensions.util';
import { app, home, profile, search } from '../../../app/assets/images/Pngs/index';
import Font from 'utils/Font.util';

interface BottomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation
}) => {
  const tabs = [
    { label: 'Home', icon: home },
    { label: 'Search', icon: search },
    { label: 'Categories', icon: app },
    { label: 'Profile', icon: profile }
  ];

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const label = tabs[index]?.label || route.name;
        const icon = tabs[index]?.icon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
            <Image
              source={icon}
              style={[
                styles.icon,
                {
                  tintColor: isFocused ? Colors.JOOD_BLUE : Colors.DARK_GRAY
                }
              ]}
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? Colors.JOOD_BLUE : Colors.BLACK
                },
                Font.regular
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
    paddingBottom: verticalScale(20),
    height: verticalScale(100),
    paddingTop: verticalScale(10)
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    borderTopWidth: moderateScale(2),
    borderTopColor: Colors.JOOD_BLUE
  },
  icon: {
    width: horizontalScale(31),
    height: verticalScale(31)
  },
  label: {
    fontSize: moderateScale(11),
    marginTop: verticalScale(5),
    textAlign: 'center'
  }
});

export default BottomTabBar;
