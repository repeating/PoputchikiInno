import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,ImageBackground,Platform, TouchableOpacity,Alert } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Users from '../model/users';

const AddNewScreen = ({navigation}) => {

  const [selectedValue, setSelectedValue] = useState("Innopolis");

  const [date,setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Empty');

  const onChange = (event,selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'web');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1 ) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')')
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const [seats,setseats] = useState(0);

  const plusHandler = () => {
    setseats(seats+1);
  };
  const minusHandler = () => {
    if (seats > 0)
    setseats(seats-1);
  };

  const AddTrip = async (dest,seats,date) => {
    console.log(seats);
    console.log(dest);
    const userName = global.Var;
    console.log(userName);
    const day_date = date.getFullYear() + '-' + date.getMonth() +'-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':00'; 
    console.log(day_date);
    
    const surl = 'http://10.0.2.2:8000' + '/trips/create/';


    const response = await fetch(surl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        'driver_name': userName,
        'destination': dest,
        'number_of_seats': seats,
        'trip_date': date
        })
        });
  };
 
  return (
    <View style={styles.container}>
      <ImageBackground source = {require('../img/back.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.baseText}>Add a new trip</Text>
        <Text style={styles.normalText}>Your Destination</Text>
      <Picker style={styles.Picker_style}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Innopolis" value="Innopolis" />
        <Picker.Item label="Kazan" value="Kazan" />
      </Picker>
      <Text style={styles.normalText}>{text}</Text>
      <View style={{margin:20}}>
        <Button title='DatePicker' color='#009387' onPress={() => showMode('date')} />
      </View>
      <View style={{margin:20}}>
        <Button title='TimePicker' color='#009387' onPress={() => showMode('time')} />
      </View>
      {show && (
        <DateTimePicker 
        testID='dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
        styles={{color:'#009387'}}
      />)}

      <Text style={styles.normalText}>Available seats: {seats}</Text>
      <View style={styles.container2}>
      <TouchableOpacity
        onPress={plusHandler}
        style={styles.roundButton1}>
        <Text style={styles.roundText} >+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={minusHandler}
        style={styles.roundButton2}>
        <Text style={styles.roundText} >-</Text>
      </TouchableOpacity>
      </View>
      <View style={{margin:20}}>
        <Button title='Add trip' color='#009387' onPress={() => AddTrip(selectedValue,seats,date)} />
      </View>
      </ImageBackground>
    </View>
  );
};

export default AddNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    paddingTop: 40,
    fontSize: 24,
    textAlign: "center"
  },
  normalText: {
    paddingTop: 25,
    margin:5,
    fontSize: 16,
    textAlign: "center"
  },
  image: {
    flex: 1,
    textAlign: "center"
  },
  Picker_style:{
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  roundButton1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#009387',
  },
  roundButton2: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#009387',
    marginLeft: 10
  },
  roundText: {
    color: 'white',
    fontSize: 24
  }
});