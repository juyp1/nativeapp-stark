import React,{Component} from 'react'
import {View,Text,ImageBackground,StyleSheet,SafeAreaView,Image,TextInput,Dimensions} from 'react-native'
import { Carousel} from '@ant-design/react-native'
import Icon from '../assets/iconfont/';
class HomePage extends  Component {
    constructor() {
        super();
    }
    render(){
        return(
            <View>
               {/*<View>*/}
               {/*    <ImageBackground source={require('../assets/home/headerbg.png')}*/}
               {/*                     style={styles.headerbg}  >*/}
               {/*     <SafeAreaView>*/}
               {/*      <View style={styles.headerContainer}>*/}
               {/*          <View style={styles.headerMenuIcon}>*/}
               {/*              <View>*/}
               {/*                  <Text style={styles.headerText}>全部</Text>*/}
               {/*              </View>*/}
               {/*              <View style={{marginTop:-1}}>*/}
               {/*                  <Icon name="icon-xialajiantou" size={20} />*/}
               {/*              </View>*/}
               {/*          </View>*/}
               {/*          <View>*/}
               {/*             <Image source={require('../assets/home/headermenu.png')} style={styles.headerMenu}/>*/}
               {/*          </View>*/}
               {/*      </View>*/}
               {/*         <View style={{marginTop:20,marginLeft: 15,marginRight: 15,*/}
               {/*             shadowColor:"#333333",elevation:3,*/}
               {/*             shadowOffset: { width: 0, height: 0 },  // 阴影偏移*/}
               {/*             shadowOpacity: 0.2,  // 阴影不透明度*/}
               {/*             shadowRadius: 10, }}>*/}
               {/*             <TextInput   placeholder={'请输入款式号搜索'}*/}
               {/*                          placeholderStyle={{paddingLeft:10}}*/}
               {/*                          placeholderTextColor={"#999999"}*/}
               {/*                 style={{*/}
               {/*                     height:44,*/}
               {/*                     backgroundColor:"#ffffff",*/}
               {/*                      }}/>*/}
               {/*         </View>*/}
               
               {/*     </SafeAreaView>*/}
               {/*    </ImageBackground>*/}
               
               {/*</View>*/}
               
    
    
               
               
               
            </View>
        )
    }
}
export  default  HomePage
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    headerbg:{
        width:Dimensions.get('window').width,
        height:600
    },
    headerContainer:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        marginLeft:15,
        marginRight:15
    },
    headerText:{
        fontSize:18,
        fontWeight:'500',
    },
    headerMenuIcon:{
        flexDirection: 'row'
    },
    headerMenu:{
        width:22,
        height: 22
    },
    
    
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width:Dimensions.get('window').width,
        height:220,
        
    },
    
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
 
})
