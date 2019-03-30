import React from 'react';
import { StyleSheet, Text,TextInput, View, Button} from 'react-native';


//all source code copyright by dedywd
export default class AppWeather extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:'',
      main:'',
      description:'',
      temp:'',
    }
  }

  render() {
    return (
      <View style={styles.vMain}>

        <View style={styles.vHeader}>
          <Text style={styles.txtHeader}>App Weather</Text>
        </View>

        <View style={styles.vContainerInput}>
          <Text style={styles.txtLabelInput}>Input City Name</Text>
          <View style={styles.vItemInput}>
            <TextInput style={styles.txtInput}
            placeholder = '     Input City Name Here     '
            keyboardType = 'default'
            onChangeText = {
                (txtCity) => this.setState({city:txtCity})
              }
            />
          </View>
          <View style={styles.vItemButton}>
          <Button color="#f09c80" onPress={
            () => {
              let url = 'http://api.openweathermap.org/data/2.5/weather?q='
              +this.state.city+
              '&appid=e2094bb1b115eb24ce353d9d62e37a24&units=metric';
              fetch(url)
              .then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                      main: responseJson.weather[0].main,
                      description: responseJson.weather[0].description,
                      temp: responseJson.main.temp

                }
                );
              }
              );
            }
          }
          title="GET WEATHER"
          accessibilityLabel="GET"
          />
          </View>
        </View>

        <View style={styles.vContainerOutput}>
          <Text style={styles.txtLabelOutput}>Temperature: {this.state.temp}</Text>
          <Text style={styles.txtLabelOutput}>Weather: {this.state.main}</Text>
          <Text style={styles.txtLabelOutput}>Description: {this.state.description}</Text>
        </View>

        <View style={styles.vFooter}>
          <Text style={styles.txtFooter}>Copyright @dedywd</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 vMain: {
 flex:1,
 backgroundColor:'white',
 },

 vHeader: {
 flex:1,
 backgroundColor:'#f08080',
 alignItems:'center',
 justifyContent:'center',
 marginBottom: 20
 },

 txtHeader: {
 color:'#fff',
 fontSize:20
 },

 vContainerInput:{
   flex:3,
   backgroundColor:'#f08980',
   alignItems:'center',
   justifyContent:'center',
   margin:15
 },

vItemInput: {
marginBottom:10,
flexDirection:'row',
},

txtLabelInput: {
color:'#fff',
fontSize:20,
padding:30
},

txtInput: {
backgroundColor:'#fff',
borderColor: 'black',
borderWidth: 1,
padding:10
},

vItemButton: {
paddingTop:35
},

vContainerOutput:{
  flex:2,
  backgroundColor:'#f08980',
  margin:15
},

txtLabelOutput: {
color:'#fff',
fontSize:15,
padding:5,
marginTop:15
},

 vFooter: {
 flex:1,
 backgroundColor:'#f08080',
 alignItems:'center',
 justifyContent:'center',
 marginTop: 20
 },

 txtFooter: {
 color:'#fff',
 fontSize:15,
 },


});
