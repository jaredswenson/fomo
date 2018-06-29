import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  Button,
  Alert, 
  TouchableHighlight,
  Modal
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };
  state = {
  	events: [
  		{
  			id: 1,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 2,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 3,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 4,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 5,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 6,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 7,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 8,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 9,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},
  		{
  			id: 10,
  			title: 'Cowabunga Bay',
  			eventName: 'Swim Party',
        address: '12047 State St, Draper, UT 84020',
        imageSrc: 'https://www.draper.ut.us/images/pages/N467/IMG_7954.jpg',  
        dateTime: 'July 4th 2018, 7:00 PM'  
  		}
  	],
  	modalVisible: false,
  	currentEvent: {
  			id: 1,
  			title: 'Aquarium',
  			eventName: 'Swim With Penguins',
        address: '12033 Lone Peak Pkwy, Draper, UT 84020',
        imageSrc: 'http://entertainment.sltrib.com/img/uploads/articles/article57754928_754893.jpg',
        dateTime: 'July 4th 2018, 7:00 PM'  
  		},

  };

	componentDidMount() {
		var _this = this;
    
  }

  // render() {
  //    Go ahead and delete ExpoConfigView and replace it with your
  //    * content, we just wanted to give you a quick view of your config 
  //   return (
  //   		<Text>test</Text>
  //   	);
  // }
  _onPressButton(event) {
  	this.setState({currentEvent: event});
    this.setState({modalVisible: true});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var _this = this;
    return (
        <ScrollView>
        {
        	this.state.events.map(event => (
              
              <TouchableOpacity style={ styles.container}  onPress={() => this._onPressButton(event)}>
	              <Text style = { styles.text }>{event.title}</Text>
	              <Text style = { styles.text }>{event.dateTime}</Text>
              </TouchableOpacity>
            ))
        }
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={{marginTop: 122}}>
            <View style={styles.container}>
              <Text style={styles.text}>{this.state.currentEvent.title}</Text>
              <Image
			          source={require('../assets/images/robot-dev.png')}
			        />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#800000',
      alignItems: 'center',
   },
   text: {
      color: '#fff'
   }
});