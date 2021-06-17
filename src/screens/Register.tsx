import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,

  TextInput,
  Image,
  TouchableOpacity,Alert
} from 'react-native';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiService} from '../../services/apiService';

interface RegisterProps {
  value: string;
  error: string | number;
}
export default function Register({navigation}: {navigation: any}) {
  const [name, setName] = useState({value: '', error: ''} as RegisterProps);
  const [email, setEmail] = useState({value: '', error: ''} as RegisterProps);
  const [password, setPassword] = useState({
    value: '',
    error: '',
  } as RegisterProps);

  const _onSignUpPressed = () => {
  

   navigation.navigate("Home")

  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={_onSignUpPressed}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
