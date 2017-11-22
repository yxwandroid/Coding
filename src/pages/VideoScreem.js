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
        this.state = {
            videoNamesMap:new Map([
                ['正在热映', 'in_theaters'],
                ['即将上映', 'coming_soon'],
                ['Top250', 'top250'],
                ['口碑榜', 'weekly'],
                ['北美票房榜', 'us_box'],
                ['新片榜', 'new_movies'],])
    };
    }


    render() {
        let items=[];

        // map 的遍历
        for (let item of this.state.videoNamesMap.entries()) {
            console.log(item)
            items.push( <VideoScreemItem item={item[1]} tabLabel={item[0]}></VideoScreemItem>);
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
