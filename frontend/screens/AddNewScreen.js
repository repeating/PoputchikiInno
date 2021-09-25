import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddNewScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Add new trip</Text>
      </View>
    );
};

export default AddNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});