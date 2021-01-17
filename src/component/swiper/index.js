import React,{Component} from 'react'
import { Text, View,Image,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'


export default () => (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}
            dot={<View style={{
                width: 8, height: 8,borderRadius: 4,  }} />}
            dotColor={"#ffffff"} activeDotColor={"#ffffff"}>
        <View   style={styles.slide}>
            <Image source={require('../../assets/home/banner1.png')} style={styles.image} />
        </View>
        <View  style={styles.slide}>
            <Image source={require('../../assets/home/banner1.png')} style={styles.image} />
        </View>

    </Swiper>
)

const styles = {
    wrapper: {
    
    
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    image:{
        width:Dimensions.get('window').width-20,
        height:160,
        borderRadius:10,
       
        
        
    },


}
