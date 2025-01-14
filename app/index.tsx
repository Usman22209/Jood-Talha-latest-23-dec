import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import BaseNavigation from 'navigation/Base.navigation';
import ProvidersHub from 'providers/ProvidersHub';

// eslint-disable-next-line import/no-unused-modules
export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Barlow-Bold': require('./assets/fonts/Barlow-Bold.ttf'),
        'Barlow-Regular': require('./assets/fonts/Barlow-Regular.ttf'),
        'Barlow-Medium': require('./assets/fonts/Barlow-Medium.ttf'),
        'Barlow-SemiBold': require('./assets/fonts/Barlow-SemiBold.ttf')
      });
    }
    loadFonts();
  }, []);

  return (
    <ProvidersHub>
      <BaseNavigation />
    </ProvidersHub>
  );
}
