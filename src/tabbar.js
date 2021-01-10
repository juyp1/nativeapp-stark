import React,{Component} from 'react'
import {View, Text,Image,StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
class Index extends  Component {
    state = {
        pages: [
            {
                selected: 'home',
                title: '首页',
                renderIcon: () => <Image source={require('./assets/tab/product.png')}
                                         style={styles.bottomTabIcon}/>,
                renderSelectedIcon: () => <Image source={require('./assets/tab/producthighlight.png')}
                                                 style={styles.bottomTabIcon}/>,
                onPress: () => this.setState({selectedTab: 'home'}),
                component: <HomePage />,
            },
            {
                selected: 'my',
                title: '我的',
                renderIcon: () => <Image source={require('./assets/tab/shop.png')}
                                         style={styles.bottomTabIcon}/>,
                renderSelectedIcon: () =><Image source={require('./assets/tab/shophighlight.png')}
                                                style={styles.bottomTabIcon}/>,
                onPress: () => this.setState({selectedTab: 'my'}),
                component: <MyPage />,
            },

        ],
    };
    constructor(props) {
        super(props);
        let selectedTab = 'home';
        // if (this.props.route.params && this.props.route.params.pagename) {
        //     selectedTab = this.props.route.params.pagename;
        // }
        this.state.selectedTab = selectedTab;
    }
    render(){
        const {selectedTab, pages} = this.state;
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <TabNavigator>
                    {pages.map((v, i) => (
                        <TabNavigator.Item
                            key={i}
                            selected={selectedTab === v.selected}
                            title={v.title}
                            renderIcon={v.renderIcon}
                            renderSelectedIcon={v.renderSelectedIcon}
                            onPress={v.onPress}
                            selectedTitleStyle={{color: '#c863d5'}}
                            tabStyle={{
                                backgroundColor: '#eee',
                                justifyContent: 'center',
                            }}>
                            {v.component}
                        </TabNavigator.Item>
                    ))}
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabIcon: {
        width: 23,
        height: 23,
    },
});
export default  Index;
