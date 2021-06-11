import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Animated, StyleSheet, View } from 'react-native';

import Form from '../Elements/Form'
import NavLink from '../Elements/NavLink';
import Submit from './Submit';


export default function SignIn() {
    const navigation = useNavigation();

    const textAnimation = useRef(new Animated.Value(0)).current;

    const translateX = textAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-150, 0]
    })

    useEffect(() => {
        const focusAnimate = navigation.addListener('focus', () => Animated.spring(textAnimation, {
            toValue: 1,
            useNativeDriver: false
        }).start() 
        )

        return focusAnimate
    }, [navigation])


    return (
        <>
            <Form />
            <View style={styles.textView} >
                <Animated.Text style={[styles.text, { transform: [{ translateX }] }]} >Sign In</Animated.Text>
                <Submit />
            </View>
            <NavLink onPress={() => navigation.navigate('Sign Up') } text='Sign Up' />

        </>
    )
}


const styles = StyleSheet.create({
    textView: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'KoHo_500Medium',
        fontWeight: '900',
        fontSize: 30,
    }
})