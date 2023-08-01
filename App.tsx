import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './router';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
