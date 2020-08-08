import React from 'react';  
import { useAuth } from '../components/common/auth-header';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuth();
  const token = localStorage.getItem('token');
  const isAuthenticated = (token) ? true : false;

  return (
    <Stack.Screen {...rest} render={props => (
      isAuthenticated === true ?
        <Component {...props} />
        :
        <Stack.Screen name="Login" component={LoginScreen} />
    )} />     
  );
}

export default PrivateRoute;