import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
export default () => (
    <View style={styles.Container}>
        <View>
            <Image source={require('../../assets/home/product1.png')} style={styles.productImg}/>
            <View style={styles.tagNewContainer}>
                <View style={styles.tagNew}>
                    <Text style={styles.tagNewText}>NEW</Text>
                </View>
            </View>
        </View>
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>LYQ20190198-a</Text>
        </View>
        <View style={styles.productInfo}>
            <View>
                <Text style={styles.productInfoMoney}> ¥299</Text>
            </View>
            <View>
                <Text style={styles.productInfoqh}>欠货:999</Text>
            </View>
        </View>
    </View>
)
const styles = StyleSheet.create({
    Container: {
        width: 165,
        marginBottom:10
    },
    productImg: {
        width: 165,
        height: 165,
    },
    tagNewContainer: {
        position: 'absolute',
        bottom: -10,
    },
    tagNew: {
        backgroundColor: '#C08941',
        width: 24,
        height: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagNewText: {
        color: '#ffffff',
        fontSize: 10,
    },
    productContainer: {
        marginTop: 15,
    },
    productTitle: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold',
    },
    productInfo: {
        marginTop: 38,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    productInfoMoney: {
        fontSize: 16,
        color: '#CCA776',
        fontWeight: '500',
    },
    productInfoqh: {
        fontSize: 12,
        color: '#999999',
        fontWeight: '400',
    },
});
