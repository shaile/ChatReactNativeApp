import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Messages from './Messages/Messages';
import { AuthContext } from "../components/common/auth-header";
import userService from "../hooks/user.service";
import io from "socket.io-client";
import Input from "./Messages/Message/Input";
import { debug } from "react-native-reanimated";

let socket;

const ChatScreen = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);
    const ENDPOINT = 'http://localhost:5000';//'https://callcebterchatserver.herokuapp.com'; 
    const { getToken } = useContext(AuthContext);

    const getMyChats = async () => {
        try {
            const { userToken } = await getToken();
            const resJson = await userService.myChat(userToken);
            // setMessages(messages => [...messages, message]);
            console.log('############', resJson.data);
            setMessages(resJson.data);
        } catch (error) {
            console.log('error', error);
            setData({
                ...messages,
                errorMessage: error.response.data.error || error.statusText
            });
        }
    }


    useEffect(() => {
        getMyChats();


    }, []);


    const socketChat = async (room, message) => {
        if (room) {
            const { name, userId } = await getToken();
            setRoom(room);
            setName(name);
            socket = io(ENDPOINT);
            socket.emit('join', { name, room, userId }, (error) => {
                if (error) {
                    alert(error);
                }
            });
            if (rooms.indexOf(room) < 0) {
                setRooms(rooms => [...rooms, room]);
                //getOldChat(state.token, room);
                debugger;
                socket.on('message', message => {
                    setMessages(messages => [...messages, message]);
                });

                socket.on("roomData", ({ users }) => {
                    setUsers([...users]);
                });
            }

            if (message) {
                socket.emit('sendMessage', { message, room }, () => setMessage(''));
            }

        }
    }

    const sendMessage = async (event, room) => {
        const { userToken } = await getToken();
        if (room && message) {
            socket.emit('sendMessage', { message, room }, () => setMessage(''));
            await saveMessage(userToken, message);
        } else if (message) {
            const jsonData = await saveMessage(userToken, message);
            await socketChat(jsonData.data.id, message);

        }
    }

    const saveMessage = async (token, message) => {
        const { userId } = await getToken();
        const toUser = users.filter(user => {
            return (userId != user.userId);
        });
        console.log('@@@@@@', toUser)
        try {
            var jsonData = await userService.saveMessage(token, {
                message: message,
                uid: room,
                to: (toUser && toUser.length > 0)?toUser.userId : null
            }
            );
            return jsonData;
        } catch (error) {
            setData({
                ...data,
                errorMessage: error.response.data.error || error.statusText
            });
        }
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                {/* <InfoBar room={room} /> */}
                <Messages messages={messages} name={'usha'} room={room} />
                <Input message={message} room={room} setMessage={setMessage} sendMessage={sendMessage} />
            </View>
            {/* <TextContainer users={users}/> */}
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: '500px'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        // width: '100%'
    }
});


export default ChatScreen;