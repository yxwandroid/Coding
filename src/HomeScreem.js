/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/20  下午4:12
 *  @author: wilson
 *  @disc:  程序的主界面
 */
import React, { Component } from 'react';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import BookScreen from "./home/BookScreen";
import VideoDetail from "./detail/VideoDetail";

export default class HomeScreem extends Component<{}> {
    render() {
        return (
            <ScrollableTabView
                initialPage={1}
                renderTabBar={() => <ScrollableTabBar/>}>
                {/*//传递数据到子控件*/}
                <BookScreen tabLabel='图书'
                             title='tab1'
                             image='image'>
                </BookScreen>
                <VideoDetail tabLabel='视频'
                             title='tab2'
                             image='image2'>
                </VideoDetail>


            </ScrollableTabView>
        );
    }
}
