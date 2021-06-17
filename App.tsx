import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Routes} from './src/Routes';
import {Provider} from 'react-redux';
import configureStore from "./src/redux/store/configureStore"  ;



const store=configureStore()
export default function App(){
    return(
        <Provider store={store}>
            <Routes/>
        </Provider>

    )
}

