import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation}: {navigation: any}) {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('token').then(value =>
        navigation.replace(value === null ? 'Login' : 'Home'),
      );
    }, 5000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 70,
          fontSize: 30,
          width: 200,
        }}>
        Welcome
      </Text>

      <Image
        style={{aspectRatio: 2, resizeMode: 'contain'}}
        source={require('../assets/images.png')}
      />
    </View>
  );
}
