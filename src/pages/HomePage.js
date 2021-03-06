import React, {Component} from 'react';

import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from '../assets/iconfont/';
import HomeSwiper from '../component/swiper';
import ProjectItem from '../component/productItem/index'
class HomePage extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
          
            <View>
                <SafeAreaView>
                    <ScrollView overScrollMode={'never'}>
                <View>
                    <ImageBackground
                        source={require('../assets/home/headerbg.png')}
                        style={styles.headerbg}>
                        <SafeAreaView>
                            <View style={styles.headerContainer}>
                                <View>
                                    <Text style={styles.headerText}>全部</Text>
                                </View>
                                <View>
                                    <Image
                                        source={require('../assets/home/headermenu.png')}
                                        style={styles.headerMenu}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    marginTop: 20,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    shadowColor: '#333333',
                                    elevation: 3,
                                    shadowOffset: {width: 0, height: 0}, // 阴影偏移
                                    shadowOpacity: 0.2, // 阴影不透明度
                                    shadowRadius: 10,
                                }}>
                                <TextInput
                                    placeholder={'请输入款式号搜索'}
                                    placeholderStyle={{paddingLeft: 10}}
                                    placeholderTextColor={'#999999'}
                                    style={{
                                        height: 44,
                                        backgroundColor: '#ffffff',
                                    }}
                                />
                            </View>
                        </SafeAreaView>
                    </ImageBackground>
                </View>
          
             
                   <View style={{height:160}}>
                       <HomeSwiper/>
                   </View>
                   {/*产品*/}
                   <View style={styles.productContainer}>
        
                       <View>
                           <ProjectItem/>
        
                       </View>
                       <View>
                           <ProjectItem/>
        
                       </View>
                       <View>
                           <ProjectItem/>
        
                       </View>
                       <View>
                           <ProjectItem/>
        
                       </View>
                       <View>
                           <ProjectItem/>
        
                       </View>
                   </View>
                        <View style={{height:160}}>
                            <HomeSwiper/>
                        </View>
                        <View style={styles.productContainer}>
        
                            <View>
                                <ProjectItem/>
        
                            </View>
                            <View>
                                <ProjectItem/>
        
                            </View>
                            <View>
                                <ProjectItem/>
        
                            </View>
                            <View>
                                <ProjectItem/>
        
                            </View>
                            <View>
                                <ProjectItem/>
        
                            </View>
                        </View>
               </ScrollView>
                </SafeAreaView>
            </View>

        );
        
    }
}

export default HomePage;
const styles = StyleSheet.create({
    headerbg: {
        width: '100%',
        height: 106,
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
    },
    headerMenu: {
        width: 22,
        height: 22,
    },
    productContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap:"wrap",
        marginTop:15,
        marginLeft: 15,
        marginRight: 15
    }
});
