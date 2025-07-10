import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './component/flatCards';
import ElevatedCards from './component/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
