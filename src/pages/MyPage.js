import React from 'react'
import {Image, Text, View} from 'react-native';
import Swiper from 'react-native-swiper'

var styles = {
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
}

export default () => (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Hello" style={styles.slide1}>
            <Image source={require('../assets/home/banner1.png')} style={{width:'100%',height:330}} />
        </View>
        <View testID="Beautiful" style={styles.slide2}>
            <Image source={require('../assets/home/banner1.png')} style={{width:'100%',height:330}} />
        </View>

    </Swiper>
)
