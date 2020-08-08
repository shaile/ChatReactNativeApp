import * as React from 'react';
import Emoji from 'react-native-emoji';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const Message = ({ message: { text, from }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (from === trimmedName) {
    isSentByCurrentUser = true;
  }

  // return (
  //   isSentByCurrentUser
  //     ? (
  //       <View style={[styles.messageContainer, styles.justifyEnd]}>
  //         <Text style={[styles.sentText, styles.pr10]}>{trimmedName}</Text>
  //         <View style={[styles.messageBox, styles.backgroundColorBlue]}>
  //           <Text style={[styles.messageText, styles.colorWhite]}>{text}</Text>
  //         </View>
  //       </View>
  //     )
  //     : (
  //       <View style={[styles.messageContainer, styles.justifyStart]}>
  //         <View style={[styles.messageBox, styles.backgroundColorLight]}>
  //           <Text style={[styles.messageText, styles.colorDark]}>{text}</Text>
  //         </View>
  //         <Text style={[styles.sentText, styles.pl10]}>{name}</Text>
  //       </View>
  //     )
  // );

  return (
    <Card containerStyle={{ padding: 0 }}>
      <View style={[styles.messageContainer, styles.justifyStart]}>
        <View style={[styles.messageBox, styles.backgroundColorLight]}>
          <Text style={[styles.messageText, styles.colorDark]}>{text}</Text>
        </View>
        <Text style={[styles.sentText, styles.pl10]}>{name}</Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  messageBox: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    // color: 'white',
    // display: 'inline-block',
    // maxWidth: '80%',
  },
  messageText: {
    letterSpacing: 0,
    textAlign: 'left',
    fontSize: 16
  },
  messageTextImg: {
    letterSpacing: 0,
    textAlign: 'left',
    fontSize: 16,
    textAlignVertical: 'center'
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '500px'
  },
  sentText: {
    display: 'flex',
    alignItems: 'center',
    // fontFamily: 'Helvetica',
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
    justifyContent: 'flex-start'
  },
  justifyEnd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
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