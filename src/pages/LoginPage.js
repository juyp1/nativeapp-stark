import React,{Component} from 'react'
import {View,Text} from 'react-native'
class LoginPage extends  Component {

    render(){
        return(
            <View style={{backgroundColor:"red",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:34}}>登录</Text>
            </View>
        )
    }
}
export  default  LoginPage