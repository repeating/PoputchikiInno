import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

GOOGLE_MAPS_APIKEY = "AIzaSyBuSRaU4rXijXU8OWT6zzGVUQEcMxfCQ5k";

const MapScreen = ({ navigation }) => {
  return (
    <View style={[tw`h-full`]}>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        debouce={400}
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
      />
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
