import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function GoogleMapView() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{
          height: Dimensions.get('screen').height * 0.23,
          width: Dimensions.get('screen').width * 0.89,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
    </View>
  );
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     map: {
//         flex: 1,
//     },
// });
