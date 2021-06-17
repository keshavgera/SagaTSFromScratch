import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StatusBar,
} from 'react-native';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiService} from '../../services/apiService';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import { State } from 'react-native-gesture-handler';


import { getUsers } from '../redux/actions/users'


interface LoginProps {
  /** input must be string
   */
  value: string;

  error: string | number;
}

 function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState({value: '', error: ''} as LoginProps);
  const [password, setPassword] = useState({
    value: '',
    error: '',
  } as LoginProps);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const req = {
      email: email.value,
      password: password.value,
    };

    apiService.post('/login',req).then(
      res => {
        AsyncStorage.setItem('token', res.data.token);
        navigation.navigate('Home');
      }, err => {
        Alert.alert('Error', 'Wrong  Email and Password');
      },
     
    );
  
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Email"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={isSecureEntry}
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touachableButton}
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <Image
            source={
              isSecureEntry
                ? require('../assets/passwordHide.png')
                : require('../assets/passwordshow.png')
            }
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={_onLoginPressed}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Register?</Text>
        </TouchableOpacity>
      </View>
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
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    flexGrow: 1,
    height: '100%',
    width: '80%',
    backgroundColor: 'transparent',
    opacity: 0.42,
  },
});
 const mapStateToProps=(state:any)=>{
   return{
users:state.users.users,
error: state.users.error,
 loading :state.users.loading

   }
 }
const mapDispatchToProps=(dispatch:any)=>{
  return{
    fetchUsers:()=>{
      dispatch(getUsers)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

