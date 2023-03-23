import React, { useState } from "react";
import {
  SafeAreaView,
} from 'react-native';
import { TextInput } from "react-native-paper";



function App(): JSX.Element {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        label={'Login'}
        placeholder={'Login'}
        value={login}
        onChangeText={setLogin}
        mode={'flat'}
      />
      <TextInput
        label={'Password'}
        placeholder={'Password'}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        mode={'flat'}
      />
    </SafeAreaView>
  );
}

export default App;
