/**
 *  @github :https://github.com/yxwandroid
 *  @weibo :https://weibo.com/5403095810/profile?rightmod=1&wvr=6&mod=personinfo
 *
 *  @date: 2017/11/22  上午10:27
 *  @author: wilson
 *  @disc:   视频的item 布局
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const thirdWidth = width / 3;

const imageWidth = thirdWidth - 10 * 2;

const imageHeight = imageWidth / 0.697;

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    width: imageWidth,
    marginLeft: 15,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  starsWrapper: {
    flexDirection: 'row',
  },
  stars: {
    width: 10,
    height: 10,
  }
});

// "35" "40"
const renderStars = (stars) => {
  if (stars === '00') {
    return;
  }
  const total = 5;
  let full, half, empty;
  full = parseInt(stars[0]) - 1;
  if (stars[1] === '5') {
    full++;
    half = 0;
    empty = total - full;
  } else {
    half = 1;
    empty = total - full - half;
  }
  const results = [];
  let i;
  for (i = 0; i < full; i++) {
    results.push(
      <Image
        key={i}
        style={styles.stars}
        source={require('../img/star-full.png')}
      />
    );
  }
  if (half) {
    results.push(
      <Image
        key={i}
        style={styles.stars}
        source={require('../img/star-half.png')}
      />
    );
  }
  for (let j = 0; j < empty; j++) {
    results.push(
      <Image
        key={i+j+1}
        style={styles.stars}
        source={require('../img/star-empty.png')}
      />
    );
  }
  return (
    <View style={styles.starsWrapper}>
      {results}
    </View>
  );

}

const Item = (props) =>  {
  const { title, image, stars, onPress } = props;
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Image
        source={{uri: image}}
        style={styles.image}
      />
      <Text
        numberOfLines={1}
        style={styles.title}>
        {title}
      </Text>
      {renderStars(stars)}
    </TouchableOpacity>
  );
};

export default Item
