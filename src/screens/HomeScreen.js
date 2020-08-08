import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import ListItems from '../hooks/ListItems';
import HeaderComponent from '../components/common/HeaderComponent';
import FooterComponent from '../components/common/FooterComponent'; 
import SignInScreen from './SignInScreen';

const HomeScreen = () => { 
  return (
    <View style={styles.mainContainer}>
     <Text>HELLO</Text>    
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
  },
  contentContainer: {
    flex: 6,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center",
    paddingRight: 5
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
});

export default HomeScreen;