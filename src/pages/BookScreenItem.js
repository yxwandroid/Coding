/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/21  下午2:38
 *  @author: wilson
 *  @disc:   图书信息界面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


export default class BookScreen extends Component<{}> {
    render() {

        const  {tabLabel} =this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../img/demo.jpg')}></Image>
                <View  >
                    <Text style={styles.textTitle}>图书标题</Text>
                    <Text style={styles.textTitle}>图书标题</Text>
                    <Text style={styles.textTitle}>图书标题</Text>
                    <Text style={styles.textTitle}>{tabLabel}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
    },
    image: {
        margin:10,
        alignSelf: 'flex-start',
        width: 100,
        height: 120,
    },
    textTitle: {
        alignSelf: 'stretch',
        textAlign: 'center',
        color: '#333333',
    },
});
