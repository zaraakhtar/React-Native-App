import React from 'react';
import { View, 
  Text, 
  SafeAreaView, 
  ScrollView } from 'react-native';
  import flatCards from './component/flatCards';
import FlatCards from './component/flatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
         <FlatCards />
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
