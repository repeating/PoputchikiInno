import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet,FlatList, SafeAreaView, StatusBar, TouchableOpacity, Alert} from 'react-native';





const SearchScreen = ({navigation}) => {


  const [trips,setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const Register = async (Trip_id) => {
    const userName = global.Var
    const surl = 'http://10.0.2.2:8000' + '/trips/register/';
        console.log(surl);
        const response = await fetch(surl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'hiker_name': userName, 
                    'trip_number': Trip_id
                })
                });
      let res = await response.json();

      console.log(res)

      const token = res.token;

      
      if (token == 'done'){
        Alert.alert('Registered!', 'You are successfully registered on this trip.', [
            {text: 'Okay'}
        ]);
        return;
    }

  }

  const Item = ({ title , date , seats, driver ,id}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.normaltext}> Driver is is {driver}  </Text>
      <Text style={styles.normaltext}> Trips date is {date}  </Text>
      <Text style={styles.normaltext}> I have {seats} availabe seats </Text>
      <TouchableOpacity
                    onPress={() => {Register(id)}}
                    style={[styles.signIn, {
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#ffffff'
                    }]}>Register</Text>
                </TouchableOpacity>
    </View>
  );

  const getTrips = async () => {
    const surl = 'http://10.0.2.2:8000' + '/trips/';
    console.log(surl)
    const response = await fetch(surl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
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
    <Item title={'Destination is ' + item.destination} date={item.trip_date} seats={item.number_of_seats} driver={item.driver_name} id={item.id}/>
  );

    return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        extraData={isLoading}
      />
    </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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