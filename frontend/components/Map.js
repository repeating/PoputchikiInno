import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import { selectOrigin } from "../slices/navSlice";
// import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  //   const origin = useSelector(selectOrigin);
  // console.log({ origin });
  // if (origin == null) {
  //   return null;
  // }
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard" // Simplify the map
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      // initialRegion={{
        // Error: Null is not an object
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
      // }}
      
    />
  );
};

export default Map;

const styles = StyleSheet.create({});