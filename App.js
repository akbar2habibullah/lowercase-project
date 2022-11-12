import * as React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {StyleProvider} from 'react-native-zephyr';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RoutesArray from './src/routes';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StyleProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NativeRouter>
          <Routes>
            {RoutesArray.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </NativeRouter>
      </SafeAreaView>
    </StyleProvider>
  );
}
