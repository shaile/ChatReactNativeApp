import * as React from 'react';
import { AuthContext } from '../components/common/auth-header';
import { View, Text, Button, Card, ListItem,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <Input
        placeholder="Email"
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
        value={username}
        onChangeText={setUsername}
      />
      <Input 
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword} />      
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}

export default SignInScreen;