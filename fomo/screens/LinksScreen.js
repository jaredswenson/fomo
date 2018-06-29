import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
import { 
  Constants,
  MapView, 
  Marker, 
  Location, 
  Permissions 
} from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Events Happening Today',
  };
  state = {
     markers: [{
        key: 1,
        title: 'Cowabunga Bay',
        coordinates: {
          latitude: 40.533030,
          longitude: -111.889966
        },
      },
      {
        key: 2,
        title: 'Aquarium',
        coordinates: {
          latitude: 40.532201,
          longitude: -111.893979
        },  
      }],
    mapRegion: null,
    locationResult: null
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  componentDidMount() {
    this._getLocationAsync();
  }

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
  this.setState({
  locationResult: 'Permission to access location was denied',
  });
}

let location = await Location.getCurrentPositionAsync({});
  this.setState({ locationResult: JSON.stringify(location) });
  let currentLocation = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  this.setState({ mapRegion: currentLocation });
};


  render() {
    var _this = this;
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          onRegionChange={this._handleMapRegionChange}
          zoomEnabled={true}
          pitchEnabled={true}
          region={this.state.mapRegion}
          annotations={this.state.markers}
        />
          {
            this.state.markers.map(marker => (
              
              <MapView.Marker
                pinColor={'#d62424'}
                key={marker.key}
                coordinate={{latitude: marker.coordinates.latitude, longitude: marker.coordinates.longitude}}
                title={marker.title}
              />
            ))
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});
