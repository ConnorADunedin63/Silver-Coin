/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   Text,
   View,
   Button
 } from 'react-native';
 import styles from './css/homeStyles';


const Home: React.FC<any> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silver Coin</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Budget" color={"green"} onPress={() => {navigation.navigate("Budget")}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Goals" color={"orange"} onPress={() => {navigation.navigate("Goals")}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Emergency Plan" color={"red"} onPress={() => {navigation.navigate("Planning")}} />
      </View>
    </View>
  )
}

 export default Home;
