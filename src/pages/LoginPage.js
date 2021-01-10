import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

const image = {uri: 'https://zh-hans.reactjs.org/logo-og.png'};

class LoginPage extends Component {
    static navigationOptions = {
        title: '登录',
        // headerStyle:{
        //     backgroundColor:'skyblue'
        // },
        // headerTintColor:"#ffffff",
        headerTintStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground source={require('../assets/login.png')} style={styles.image}>
                    <View style={styles.panleContainer}>
                        <View style={styles.panle}>
                            <View style={{
                                display: 'flex', flexDirection: 'row', borderBottomWidth: 2,
                                borderBottomColor: '#eeeeee', height: 45,
                            }}>
                                <Image source={require('../assets/user.png')}
                                       style={{width: 15, height: 18, marginTop: 20, marginRight: 10}}/>
                                <TextInput style={{flex: 1}} placeholder={'请输入账号'} placeholderStyle={{fontSize: 14}}/>
                            </View>
                            <View style={{
                                display: 'flex', flexDirection: 'row', borderBottomWidth: 2, marginTop: 10,
                                borderBottomColor: '#eeeeee', height: 45,
                            }}>
                                <Image source={require('../assets/userpass.png')}
                                       style={{width: 15, height: 18, marginTop: 20, marginRight: 10}}/>
                                <TextInput style={{flex: 1}} placeholder={'请输入密码'} placeholderStyle={{fontSize: 14}}/>
                            </View>

                        </View>
                    </View>
                    <View style={styles.btnMenuContainer}>
                        <View style={styles.btnMenus}>
                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.btnMenu}>
                                    <Text style={styles.btnMenuFont}>登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}

export default LoginPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',

        justifyContent: 'center',

    },
    panleContainer: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,

    },
    panle: {
        backgroundColor: '#ffffff',
        height: 205,
        borderRadius: 16,
        position: 'absolute',
        width: '100%',
        bottom: 52,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 33,
    },
    btnMenuContainer: {

        position: 'absolute',
        bottom: 30,
        width: '100%',
    },
    btnMenus: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnMenu: {
        width: 190,
        height: 44,

        borderRadius: 44,
        backgroundColor: '#F6F6F6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnMenuFont:{
        fontSize: 14,
        color:"#999999"
    }
});
