import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect, useRef } from 'react'
import { Easing } from 'react-native';
import { Dimensions, StyleSheet, Animated, View } from 'react-native'


import Background from '../../images/art28.jpg';
import ButtonElement from '../Elements/ButtonElement';

const { width, height } = Dimensions.get('window');


export default function Start() {

    const navigation = useNavigation();

    const animation = useRef(new Animated.Value(0)).current;

    const bgtranslateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [ -width, 0]
    })

    const mainTranslateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0]
    })

    const textTranslateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [ -width, 0]
    })
    

    const buttontranslateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [height/2, 120]
    })

    const buttonPress = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start(() => {
            navigation.navigate('Login')
        })
    }

    useLayoutEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            delay: 200,
            easing: Easing.elastic(1),
            useNativeDriver: false
        }).start()
    }, [])


    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }} >
            <Animated.Image
                source={Background}
                resizeMode='contain'
                blurRadius={0}
                style={[styles.bg, { transform: [{ translateY: bgtranslateY}] } ]}
            />
            <Animated.Text style={[styles.mainText, { transform: [{ translateX: mainTranslateX }] }]} >Welcome</Animated.Text>
            <Animated.Text style={[styles.text, { transform: [{ translateX: textTranslateX }] }]} >Create an account and access thousands{"\n"}                    of cool images. </Animated.Text>
            
            <Animated.View style={{ transform: [{translateY: buttontranslateY}] }} >
                <ButtonElement buttonPress={buttonPress} text='Getting Started' />
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    bg: { 
        width: width + 1, 
        height: height - height/2,
    },
    mainText: {
        color: '#333',
        fontFamily: 'KoHo_600SemiBold',
        letterSpacing: 2,
        marginHorizontal: 10,
        alignSelf: 'center',
        fontSize: 30,
    },
    text: {
        color: '#aaa',
        fontFamily: 'KoHo_400Regular',
        letterSpacing: 1,
        marginHorizontal: 10,
        alignSelf: 'center',
        fontSize: 16,
        marginBottom: 20,
    },
})