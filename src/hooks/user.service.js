import axios from "axios";
import { buildURL, Urls } from "./api-urls";
import { headers } from "./getToken";

const userService = {
    login: async (payload) => { 
        const loginurl = `${buildURL(Urls.Login, null, null)}`; 'https://callcenterchatapi.herokuapp.com/auth/login';////
        const response = await axios.post(loginurl, {'username': payload.username, 'password': payload.password});
        console.log('XXXXXXXXXXXXXXXXXXXXXXSERVICE LOGIN', response.data); 
        return response.data;
    },
    signUp: async (payload) => {
        const signupurl = `${buildURL(Urls.SignUp, null, null)}`;
        const response = await axios.post(signupurl, payload);
        return response;
    },
    myChat: async (token) => {
        const header = await headers(token);
        console.log('XXXXXXXXXXXXXXXXXXXXXXSERVICE USERCHAT HEADER', `=>>Urls${Urls.MyChat}---${buildURL(Urls.MyChat, null, null)}`); 
        const assurl = `${buildURL(Urls.MyChat, null, null)}`;//'https://callcenterchatapi.herokuapp.com/chat/user/me';
        const response = await axios.get(assurl, header);
        return response;
    },
    assignRoom: async (token, uid) => {
        const header = headers(token);
        const arurl = `${buildURL(Urls.AssignRoom, null, { uid })}`;
        await axios.get(arurl, header);
    },
    saveMessage: async (token, payload) => {
        const header = await headers(token);
        const saveurl = `${buildURL(Urls.SaveChat, null, null)}`;
        return await axios.post(saveurl, payload, header);
    },
    visitors: async (token) => {
        const header = headers(token);
        const visurl = `${buildURL(Urls.History, null, null)}`;
        return await axios.get(visurl, header);
    },
    findRoom: async (token) => {
        const header = await headers(token);
        const url = `${buildURL(Urls.FindRoom, null, null)}`;
        return await axios.get(url, header);
    },
}


export default userService;