import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet,FlatList, SafeAreaView, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { useTheme } from '@react-navigation/native';

const TripsScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const [trips,setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const Item = ({ title , date , phone, driver}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.normaltext}> Driver is is {driver}  </Text>
      <Text style={styles.normaltext}> Trips date is {date}  </Text>
      <Text style={styles.normaltext}> Contact info: {phone} </Text>
    </View>
  );

  const getTrips = async () => {
    const userName = global.Var;
    const surl = 'http://10.0.2.2:8000' + '/trips/mytrips/';
    console.log(surl)
    const response = await fetch(surl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        'driver_name': userName
        })
      }).then(response => response.json())
      .then(data => {
          setTrips(data.token);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
    }

  useEffect(() => {
    setLoading(true);
    getTrips();
}, []);

  const renderItem = ({ item }) => (
    <Item title={'Destination is ' + item.destination} date={item.trip_date} phone={item.mobile_number} driver={item.driver_name}/>
  );

  
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>Registered trips</Text>
        <SafeAreaView style={styles.container}>
      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        extraData={isLoading}
      />
    </SafeAreaView>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={styles.baseText}>Do you want to Register on more trips?</Text>
        <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Search for another trip</Text>
                </TouchableOpacity>
      </View>
    );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center"
  },
  item: {
    backgroundColor: '#009387',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#ffffff'
  },
  normaltext: {
    fontSize: 16,
    color: '#ffffff'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}
});