/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/22  上午8:40
 *  @author: wilson
 *  @disc:   视频界面
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import Item from "../components/Item";
//// https://api.douban.com/v2/movie/new_movies?start=0&count=20
const  VideoApi='https://api.douban.com/v2/movie/';
export default class VideoScreemItem extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            refreshing: false,
            ready: false,
            items: this.props.item,
            tabLabel: this.props.tabLabel,
        };
    }

    refreshing = false;
    start = 0;
    count = 12;


    //进行网络数据请求
    fetchData = (start = 0, count = 20) => {
        if (this.refreshing) {
            return;
        }
        this.setState({
            refreshing: true,
        });

        this.refreshing = true;

        return fetch(`${VideoApi+this.state.items}?start=${start}&count=${count}`)
            .then((response) => response.text())
            .then((responseText) => {
                const json = JSON.parse(responseText);
                this.setState({
                    // movies: json.subjects,
                    refreshing: false,
                });
                this.refreshing = false;
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }


    freshData = async () => {
        const json = await this.fetchData();
        this.setState({
            movies: json.subjects,
        });
    };

    fetchMore = async () => {
        const json = await this.fetchData(this.start, this.count);
        if (json) {
            this.start += this.count - 1;
            this.setState({
                movies: this.state.movies.concat(json.subjects),
            });
        }
    };


    async componentDidMount() {
        await this.fetchMore();
        this.setState({
            ready: true,
        });
    }

    render() {

        const {movies, refreshing, ready} = this.state;
    //    const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {
                    ready ?
                        <FlatList
                            // style={styles.row}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            data={movies}
                            onRefresh={this.freshData}
                            onEndReached={this.fetchMore}
                            onEndReachedThreshold={0}
                            refreshing={refreshing}
                            ListFooterComponent={() => {
                                return refreshing &&
                                    <ActivityIndicator size="large"/>
                            }}
                            renderItem={({item}) => {
                                return (<Item
                                    title={item.title}
                                    image={item.images.medium}
                                    stars={item.rating.stars}
                                    onPress={() => navigate('Detail', {
                                        id: item.id,
                                        callback: (data) => {
                                            this.setState({
                                                childState: data
                                            })
                                        }
                                    })}
                                />)
                            }
                            }
                        />
                        :
                        <ActivityIndicator size="large" style={styles.loading}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
