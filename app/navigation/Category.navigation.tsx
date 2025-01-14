import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from 'screens/categories';
import CategoryOffers from 'screens/category-offers';
import { RootStackParamList } from './Navigation.types';

const Stack = createStackNavigator<RootStackParamList>();

const CategoryNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories_Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Categories_Screen" component={Categories} />
      <Stack.Screen name="Category_Offers" component={CategoryOffers} />
    </Stack.Navigator>
  );
};

export default CategoryNavigation;
