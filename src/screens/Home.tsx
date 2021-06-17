import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home( {navigation}: {navigation: any}) {
  const logout=()=>{
    AsyncStorage.removeItem("token").then(
      res=>{navigation.replace("Splash")}
    )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>
                       <Text style={{textAlign: 'center',fontWeight: 'bold',marginBottom:70,fontSize: 30,width: 200
}}>Welcome Home </Text>
        <Button
          title="LOGOUT"
          onPress={logout}
        />
      </View>
    );
  }