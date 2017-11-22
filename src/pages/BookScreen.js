/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/20  下午4:12
 *  @author: wilson
 *  @disc:  图书主界面
 */
import React, {Component} from 'react';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import BookScreenItem from "./BookScreenItem";

export default class BookScreen extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {};


    }


    render() {
        let booksNames = ['新书', '热门', '推荐', '小说'];//名称数组
        let items = [];// tabLabel 数组
        for (let i = 0; i < booksNames.length; i++) {
            items.push(<BookScreenItem tabLabel={booksNames[i]}></BookScreenItem>)
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
