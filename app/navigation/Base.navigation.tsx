import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/home';
import CategoryOffers from 'screens/category-offers';
import Search from 'screens/search';
import Profile from 'screens/profile';
import BottomTabBar from 'components/BottomTabBar';
import CategoryNavigation from 'navigation/Category.navigation';
import { CategoryType } from 'navigation/Navigation.types';
import About from 'screens/about';

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  Tabs: undefined;
  Home_Offers: CategoryType;
  About: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Categories" component={CategoryNavigation} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const BaseNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigation} />

      <Stack.Screen name="Home_Offers" component={CategoryOffers} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default BaseNavigation;
