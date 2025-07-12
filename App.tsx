import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './component/flatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCards from './component/FancyCards';
import ActionCard from './component/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
