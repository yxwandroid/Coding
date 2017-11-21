/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/20  下午4:12
 *  @author: wilson
 *  @disc:  电影主界面
 */
import React, {Component} from 'react';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import VideoScreemItem from "./VideoScreemItem";

export default class VideoScreem extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let videosNames = ['正在热映', '即将上映', 'Top250', '口碑榜','北美票房榜','新片榜'];//名称数组
        let items = [];// tabLabel 数组
        for (let i = 0; i < videosNames.length; i++) {
            items.push(<VideoScreemItem tabLabel={videosNames[i]}></VideoScreemItem>)
        }

        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar/>}>
                {items}
            </ScrollableTabView>
        );
    }
}
