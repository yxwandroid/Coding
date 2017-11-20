/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/20  下午4:11
 *  @author: wilson
 *  @disc:  程序的页面集合
 */
import {StackNavigator} from 'react-navigation';
import VideoDetail from "./src/detail/VideoDetail";
import BookDetail from "./src/detail/BookDetail";
import HomeScreem from "./src/HomeScreem";

export const App = StackNavigator({
    HomeScreem: {
        screen: HomeScreem,
        navigationOptions: {
            headerTitle: '首页',
        },
    },
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
