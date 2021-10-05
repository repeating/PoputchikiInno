import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,ImageBackground } from 'react-native';

import {Picker} from '@react-native-picker/picker';


const AddNewScreen = ({navigation}) => {

  const [selectedValue, setSelectedValue] = useState("Innopolis");
  return (
    <View style={styles.container}>
      <ImageBackground source = {require('../img/back.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.baseText}>Add a new trip</Text>
      <Picker style={styles.Picker_style}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Innopolis" value="inno" />
        <Picker.Item label="Kazan" value="kazan" />
      </Picker>
      </ImageBackground>
    </View>
  );
};

export default AddNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    paddingTop: 40,
    fontSize: 24,
    textAlign: "center"
  },
  image: {
    flex: 1,
    textAlign: "center"
  },
  Picker_style:{
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  }
});