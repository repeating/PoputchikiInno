import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutUsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Who we are?</Text>
      </View>
    );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});