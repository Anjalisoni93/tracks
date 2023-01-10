import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.18438069389881,
        longitude: -114.0546546181831,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;