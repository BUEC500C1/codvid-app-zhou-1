mport React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';


class FirstPage extends Component {
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header 
    return {
      header: (
        <View
          style={{
            height: 45,
            marginTop: 20,
            backgroundColor: 'orange',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            COVID-19 update report
          </Text>
        </View>
      ),
    };
  };

  //justifyContent: 'center', //Centered vertically
  //alignItems: 'center' // Centered horizontally
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#ffdffd' }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Real time update with {"\n"}
            Coronavirus COVID19 API. {"\n"}
          </Text>

          <Button
            title="Click to Search Page"
            onPress={() => {
              this.props.navigation.navigate('ThirdPage');
            }}
          />   

          <Button
            title="Click to COVID-19 Map of BU"
            onPress={() => {
              this.props.navigation.navigate('FourthPage');
            }}
          />          

          <Button
            title="Click to see the Global Summary Report"
            onPress={() => {
              this.props.navigation.navigate('SecondPage');
            }}
          />

          <Text> </Text>

          <Image style={{
            height: 150,
            width: 300,
            justifyContent: 'center'
          }} source={require('../assets/2019-coronavirus.png')} />

        </View>
      </View>
    );
  }
}
export default FirstPage;
