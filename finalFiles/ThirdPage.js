import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const BLUE = "#428AF8"

export default class ThirdPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ctry: '',
      TextHolder : "https://api.covid19api.com/live/country/CNAME/status/confirmed/date/YEAR-MON-DAYT00:00:00Z",
      dataSource:[]
    }
  }

  submit = (ctry) => {
    // get today's date
    var year = new Date().getFullYear(); //Current Year
    var date = new Date().getDate() - 1; //Current Date - 1 --> previous date
    date = date < 10 ? '0' + date : '' + date;
    var month = new Date().getMonth() + 1; //Current Month
    month = month < 10 ? '0' + month : '' + month; 
    
    var SampleText = this.state.TextHolder.toString();
    var NewText = SampleText.replace("CNAME", ctry.replace(/\s+/g, '')); 
    NewText = NewText.replace("YEAR", year); 
    NewText = NewText.replace("MON", month); 
    NewText = NewText.replace("DAY", date); 
    // get rid of white space
    alert('Link: ' + NewText)

    // search country: china, united-states, Italy, singapore, japan
    fetch(NewText)
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
  
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height: .5,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
        }}
      />
    );
  }

  renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>Country: {data.item.Country}</Text>
      <Text style={styles.lightText}>Province: {data.item.Province}</Text>
      <Text style={styles.lightText}>Lat: {data.item.Lat}</Text>
      <Text style={styles.lightText}>Lon: {data.item.Lon}</Text>
      <Text style={styles.lightText}>Confirmed cases: {data.item.Confirmed}</Text>
      <Text style={styles.lightText}>Deaths cases: {data.item.Deaths}</Text>
      <Text style={styles.lightText}>Recovered cases: {data.item.Recovered}</Text>
    </TouchableOpacity>

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
    const { navigate } = this.props.navigation;
    const { dataSource } = this.state;
      
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontWeight: "bold"}}>Search Result Report {"\n"} </Text>
        <Text>Every country's confirmed/recovered/deaths data until Today.  {"\n"} </Text>

        <Text>
          Country you wanna search for: 
        </Text>

        <TextInput
          style={styles.textInputStyle}
          selectionColor={BLUE}
          placeholder="Enter Country"
          placeholderTextColor = "#9a73ef"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({ctry:text})}
        />

        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.submit(this.state.ctry)
          }>
          <Text style = {styles.submitButtonText}> Query </Text>
        </TouchableOpacity>

        <FlatList
          data= {dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem= {item=> this.renderItem(item)}
          keyExtractor= {item=>item.Date.toString()}
        />

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdffd',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#7a42f4',
    borderWidth: 1,
    height:25,
    paddingLeft:6
    //margin: 5
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    margin: 1,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText:{
    color: 'white'
  },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  }
});
