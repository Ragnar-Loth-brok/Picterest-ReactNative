import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Animated, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import Profile from '../../images/profile2.jpg';



export default function ProfileAnimate() {

    const navigation = useNavigation();

    const animation = useRef(new Animated.Value(0)).current;
    const textAnimation = useRef(new Animated.Value(0)).current;

    const avatarX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0]
    })


    const textFirstX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 0]
    })
    
    const textSecondX = textAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 0]
    }) 
    
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start() )

        return unsubscribe;

    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.timing(textAnimation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false
        }).start() )

        return unsubscribe;

    }, [])
    

    return (
        <>
            <Animated.View style={{ transform: [{ translateX: avatarX }] }} >
                <Avatar 
                    size='large'
                    rounded
                    source={Profile}
                />
            </Animated.View>
            <View style={styles.textView} >
                <Animated.Text style={[styles.textFirst, { transform: [{ translateX: textFirstX }] }]} >Ragnar</Animated.Text>
                <Animated.Text style={[styles.textSecond, { transform: [{ translateX: textSecondX }, { translateY: -15 }] }]} >Lothbrok</Animated.Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textView: {
        transform: [{ translateY: -5 }],
        marginLeft: 40
    },
    textFirst: {
        fontFamily: 'KoHo_500Medium',
        fontWeight: '900',
        letterSpacing: 2,
        fontSize: 30,
    },
    textSecond: {
        fontFamily: 'KoHo_500Medium',
        fontWeight: '900',
        fontSize: 20,
        color: '#aaa',
        letterSpacing: 3,
        marginLeft: 40
    }
})