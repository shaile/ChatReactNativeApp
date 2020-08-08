import React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

const Input = ({ setMessage, room, sendMessage, message }) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event, room) : null}
    />
    <Button 
      title="Send" 
      style={styles.sendButton} 
      onPress={e => sendMessage(e, room)}/>
  </View>
)

const styles = StyleSheet.create({
 form: {
    flex:1,
    // borderTop: '2px solid #D3D3D3'
  },
  input: {
    borderWidth: 1,
    borderRadius: 0,
    borderColor: 'gray',
    paddingLeft: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5, 
    height: 40,
    fontSize: 16,
  },
  sendButton: {
    color: 'rgb(255, 0, 255)',
    textTransform: 'uppercase',
    textDecorationLine: 'none',
    backgroundColor: '#2979FF',
    paddingLeft: '20',
    paddingRight: '20',
    paddingLeft: '20',
    paddingBottom: '520',
    // display: 'inline-block',
    borderWidth: 0,
    width: 20,
  }
});
export default Input;