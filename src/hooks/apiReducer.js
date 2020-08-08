export const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    userData: null,
    isSignout: false,
    isLoading: true
  };
  
  export const apiReducer = (state, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          isAuthenticated: true,
          user:action.user,
          token: action.token
        }; 
      case 'RESTORE_TOKEN':
          return {
            ...state,
            isAuthenticated: true,
            token: action.token,
            isLoading: false,
          }; 
    case 'LOG_OUT':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.accessToken,
        isSignout: true,
      };         
      case "USERLIST":
          return {
            ...state,
            userData: action.payload
          }; 
      case "HistoryLIST":
          return {
            ...state,
            historyData: action.payload
          };  
      case "HistoryDetailLIST":
          return {
            ...state,
            historyDetailData: action.payload
          };  
      default:
        return state;
    }
  };
