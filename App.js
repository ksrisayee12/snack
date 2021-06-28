import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
       { shouldPlay: true }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{backgroundColor: 'red',
              alignItems:'center',
              width:200,
              height:200,
              borderRadius:100,
              marginLeft:90,
              justifyContent:'center',
              borderColor:'green',
              borderWidth:2
      }}>
    <Text
    style={{fontSize:18,
            fontWeight:"bold"
    }}
    >Pressssss Meeeeeee</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton/>
      </View>
    );
  }
}