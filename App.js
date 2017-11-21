/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/20  下午4:11
 *  @author: wilson
 *  @disc:  程序的页面集合
 */
import {StackNavigator,TabNavigator} from 'react-navigation';
import VideoDetail from "./src/detail/VideoDetail";
import BookDetail from "./src/detail/BookDetail";
import VideoScreem from "./src/home/VideoScreem";
import BookScreen from "./src/home/BookScreen";

const MainScreenNavigator = TabNavigator({

        BookScreen: {
            screen: BookScreen,
            navigationOptions: {
                tabBarLabel: '图书',
            },
        },
        VideoScreem: {
            screen: VideoScreem,
            navigationOptions: {
                tabBarLabel: '电影',
            },
        },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                paddingBottom:20,
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
);
export const App = StackNavigator({

    HomeScreem: {
        screen: MainScreenNavigator,
        navigationOptions: {
            headerTitle: '首页',
        },
    },

    // BookScreen: {
    //     screen: HomeScreem,
    //     navigationOptions: {
    //         headerTitle: '首页',
    //     },
    // },
    VideoDetail: {
        screen: VideoDetail,
        navigationOptions: {
            headerTitle: '视频详情',
        },
    },
    BookDetail: {
        screen: BookDetail,
        navigationOptions: {
            headerTitle: '图书详情',
        },
    },

});
