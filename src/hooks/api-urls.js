export const Urls = {
    HistoryDetail: "/chat/history/detail",
    History: "/chat/chathistory",
    Assignment:'/chat/awaiting',
    AssignRoom:'/chat/assign/:uid',
    LiveUsers:'/chat/liveusers',
    Login:'/auth/login',
    SignUp:'/auth/create',
    SaveChat:'/chat',
    MyChat:'/chat/user/me'
}
export const buildURL = (url, queryParam, paramReplacements) => {
    const API_URL = 'https://callcenterchatapi.herokuapp.com';//process.env.REACT_APP_API_URL;
  
    if (queryParam) {
      url = addQueryParameters(url, queryParam);
    }
  
    if (paramReplacements) {
      url = replaceParams(url, paramReplacements);
    }
  
    return API_URL + url;
  };
  const addQueryParameters = (url, params) => {
    const queryList = [];
    Object.keys(params).forEach(k => {
      queryList.push(`${k}=${encodeURIComponent(params[k])}`);
    });
  
    const prefixCharacter = url.indexOf("?") === -1 ? "?" : "&";
  
    return `${url + prefixCharacter + queryList.join("&")}`;
  };
  
  const replaceParams = (url, params) => {
    Object.keys(params).forEach(k => {
      url = url.replace(`:${k}`, encodeURIComponent(params[k]));
    });
    return url;
  };  