import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';

import { AuthContext } from './src/components/common/auth-header';
import userService from './src/hooks/user.service';
import ChatScreen from './src/screens/ChatScreen';
import { apiReducer, initialState } from './src/hooks/apiReducer';

const Stack = createStackNavigator();
const App = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(apiReducer, initialState);
  // console.log('********************************', state);
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        // alert('app', userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data, navigation) => {
        try {
          const resJson = await userService.login(data);      //resJson.accessToken    
          await AsyncStorage.setItem('userToken', resJson.accessToken);
          await AsyncStorage.setItem('user', resJson.user);
          await AsyncStorage.setItem('userId', resJson.userId);
          dispatch({ type: 'SIGN_IN', token: resJson.accessToken });
        } catch (e) {
          console.log('@@@@@@@@@@', e);
        }
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token


      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      getToken: async () => {
        let userToken;
        let name;
        let userId;

        try {
          userToken = await AsyncStorage.getItem('userToken');
          name = await AsyncStorage.getItem('user');
          userId = await AsyncStorage.getItem('userId');
          
          // alert('app', userToken);
        } catch (e) {
          // Restoring token failed
        }
  
        // After restoring token, we may need to validate it in production apps
  
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        return {userToken, name, userId};
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.token == null ? (
            <Stack.Screen name="SignIn" component={SignInScreen} />
          ) : (
              <Stack.Screen name="Chat" component={ChatScreen} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;