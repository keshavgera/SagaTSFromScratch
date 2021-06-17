import Axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert} from 'react-native'
import Splash from '../src/screens/Splash';
import {navigate} from '.././src/navigations/SideMenu/RootNavigator';


export const baseUrl = 'https://reqres.in/api/';
export const apiBaseUrl = baseUrl;
import { call, put, takeEvery } from 'redux-saga/effects'

export const apiService = Axios.create({
    baseURL: apiBaseUrl,
		headers: { 'Content-Type': 'application/json' },
        data:{},
        method: 'post'
});




apiService.interceptors.response.use(
    (response) => {

           navigate("Home", {token: true});

			return Promise.resolve(response)
		} ,

    (error) => {
        console.log("error in api")
        if (!error.response) {
           return new Promise((resolve, reject) => {
              reject(error);
           }); }
            if(error.response) {

             navigate("Splash", {token: true});

              } 
         }
         )
         function* fetchUsers(action) {
          try {
             const users = yield call(apiService);
             yield put({type: 'GET_USERS_SUCCESS', users: users});
          } catch (e) {
             yield put({type: 'GET_USERS_FAILED', message: e.message});
          }
       }
       
       function* userSaga() {
          yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
       }
       
       

 export default apiService;