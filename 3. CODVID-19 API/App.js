import React, { Component }  from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
// BU address
const LATITUDE = 42.3505;
const LONGITUDE = -71.1054;
const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class FourthPage extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,

        totalCon: '',
        TotalD: '',
        TotalRec: ''
      }
    };
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
    .then(response => {
      this.setState({ totalCon: response.data.Global.TotalConfirmed });
      this.setState({ TotalD: response.data.Global.TotalDeaths });
      this.setState({ TotalRec: response.data.Global.TotalRecovered });
      
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'COVID-19 search page'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'orange'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => alert('Thank you for the like!')}>
          <Text
            style={{
              color: 'white',
            }}>
            Like this!
          </Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
          <Text
            style={{
              color: 'white',
            }}>
            Go back
          </Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { totalCon, TotalD, TotalRec } = this.state;

    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.state.region}
        showsUserLocation={true}
        onMapReady={this.onMapReady}
        onRegionChangeComplete={this.onRegionChange}>
        
          <MapView.Marker
          coordinate={{ 
            "latitude": this.state.region.latitude,   
            "longitude": this.state.region.longitude }}
            title={"Location"}
            draggable />
      </MapView>

      <View style={styles.whiteView}>
        <Text style={styles.title}>
          COVID-19 cases {"\n"}
          of this place's World/Earth.
        </Text>
        <Text style={styles.txtStyle}> 
          Total Confirmed: {totalCon} {"\n"}
          Total Deaths: {TotalD}{"\n"}
          Total Recovered: {TotalRec}{"\n"}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  whiteView: {
    position:'absolute', 
    backgroundColor: 'white', 
    height: 200,
    top: height-200, 
    width: width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center', 
    top: 20,
    color: 'blue'
  },
  txtStyle: {
    left: 100,
    top: 30,
    color: 'blue'
  }
});
