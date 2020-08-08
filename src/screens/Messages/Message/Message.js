import * as React from 'react';
import Emoji from 'react-native-emoji';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <View style={[styles.messageContainer, styles.justifyEnd]}>
          <Text style={[styles.sentText, styles.pr10]}>{trimmedName}</Text>
          <View style={[styles.messageBox, styles.backgroundColorBlue]}>
            <Text style={[styles.messageText, styles.colorWhite]}>{text}</Text>
          </View>
        </View>
      )
      : (
        <View style={[styles.messageContainer, styles.justifyStart]}>
          <View style={[styles.messageBox, styles.backgroundColorLight]}>
            <Text style={[styles.messageText, styles.colorDark]}>{text}</Text>
          </View>
          <Text style={[styles.sentText, styles.pl10]}>{user}</Text>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  messageBox: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#ffffff',
    display: 'flex'
  },
  messageText: {
    width:'100%',
    letterSpacing: 0,
    alignItems: 'flex-start',
    fontSize: 10,
    flexWrap:'wrap'
  },
  messageTextImg: {
    letterSpacing: 0,
    textAlign: 'left',
    fontSize: 5,
    textAlignVertical: 'center'
  },
  messageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop:3
  },
  sentText: {
    display: 'flex',
    alignItems: 'center',
    color: '#828282',
    letterSpacing: 0.3
  },
  pl10: {
    paddingRight: 10
  },
  pr10: {
    paddingLeft: 10
  },
  justifyStart: {
    alignSelf: 'flex-start'
  },
  justifyEnd: { 
    alignSelf: 'flex-end' 
  },
  colorWhite: {
    color: '#f0f8ff'
  },
  colorDark: {
    color: '#353535'
  },
  backgroundColorLight: {
    backgroundColor: '#F3F3F3'
  },
  backgroundColorBlue: {
    backgroundColor: '#2979FF'
  }
});

export default Message;