import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import ImageSelect from './ImageSelect';


export default function AddImage() {

    const animation = useRef(new Animated.Value(0)).current;

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0]
    })

    useEffect(() => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start()
    })


    return (
        <View style={styles.container} >
            <Animated.Text style={[styles.text, { transform: [{ translateX }] }]} >Let's add images of you doing exciting{"\n"}      stuff to spice up your profile</Animated.Text>
            <ImageSelect />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
    },
    text: {
        color: '#aaa',
        fontFamily: 'KoHo_400Regular',
        letterSpacing: 1,
        marginHorizontal: 10,
        alignSelf: 'center',
        fontSize: 16
    },
})