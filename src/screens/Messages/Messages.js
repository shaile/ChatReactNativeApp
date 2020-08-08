import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Message from './Message/Message' ;

const Messages = ({ messages, name, room }) => (
  <ScrollView style={styles.messages}>
    {messages.map((message, i) => <View key={i}>{<Message message={message} name={name}/>}</View>)}
  </ScrollView>
);

const styles = StyleSheet.create({
  messages: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft:0,
    paddingRight: 0,
    overflow: 'visible',
    flex: 1
  } 
});

export default Messages;