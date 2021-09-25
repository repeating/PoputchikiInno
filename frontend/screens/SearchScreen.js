import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        <Button
            title="Go to trips screen"
            onPress={() => navigation.navigate("Trips")}
        />
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});