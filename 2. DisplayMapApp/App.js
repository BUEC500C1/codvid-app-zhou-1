import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default

class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        // Latitude and longitude are used to tell the position of the object
        // BU address 
        latitude: 42.3505,
        longitude: -71.1054,
        // latitudeDelta and longitudeDelta are used to 
        // provide the zoom options in the map.
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
      />
      
    );
  }
}

