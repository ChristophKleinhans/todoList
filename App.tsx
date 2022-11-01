import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, ScrollView, Text, View, SafeAreaView, Button } from 'react-native';
import longText from './src/data/data';
import ListObject from './src/components/list-object'

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1.2
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  headerFont: {
    fontSize: 50,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1 
  }
});


const App = () => {


    const numbers = [1,2,3,4,5,6,7,8,9];
    const listItems = numbers.map((number) => 
      <ListObject key={number.toString()} margin={10} headerText={'This is my other object'} text={longText} />
    )



  return (

    <SafeAreaView style={ styles.safeContainer } >
      
      <View style={ styles.headerContainer }>
          <Text style={ [styles.headerFont] }>LIST MAKER</Text>
      </View>

      <ScrollView style={ styles.scrollContainer }>

      {listItems}

      </ScrollView>
    </SafeAreaView>
  
  
  );

};

export default App;
