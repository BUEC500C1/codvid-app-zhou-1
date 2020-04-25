import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';


export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewCon: '',
      totalCon: '',
      NewD:'',
      TotalD: '',
      NewRec: '',
      TotalRec: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
    .then(response => {
      this.setState({ NewCon: response.data.Global.NewConfirmed });
      this.setState({ totalCon: response.data.Global.TotalConfirmed });
      this.setState({ NewD: response.data.Global.NewDeaths });
      this.setState({ TotalD: response.data.Global.TotalDeaths });
      this.setState({ NewRec: response.data.Global.NewRecovered });
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
      title: navigation.getParam('Title', 'COVID-19 update report'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'orange'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('FifthPage')}>
          <Text
            style={{
              color: 'white',
            }}>
            World map
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
    const { navigate } = this.props.navigation;
    const { NewCon, totalCon, NewD, TotalD, NewRec, TotalRec } = this.state;
      
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontWeight: "bold"}}> Global Summary Report {"\n"} </Text>
        <Text style={styles.txtStyle}> 
          New Confirmed: {NewCon} {"\n"}
          Total Confirmed: {totalCon} {"\n"}
          New Deaths: {NewD} {"\n"}
          Total Deaths: {TotalD}{"\n"}
          New Recovered: {NewRec}{"\n"}
          Total Recovered: {TotalRec}{"\n"}
        </Text>

        <Image style={{
            height: 160,
            width: 180,
            justifyContent: 'center'
          }} source={require('../assets/earth_mask.jpg')} />
        
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffdffd',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    felx: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
