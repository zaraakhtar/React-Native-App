import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './component/flatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCards from './component/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
