import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, View } from 'react-native';

import SignUp from '../components/LoginFlow/SignUp';
import Img from '../images/art5.png';


const { width } = Dimensions.get('window');

export default function SignupScreen({ navigation }) {

    const animation = useRef(new Animated.Value(0)).current;

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [ -width, 0 ]
    })

    const translateY = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -300],
        extrapolate: 'clamp'
    })


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start() )

        return unsubscribe
    }, [])

    useEffect(() => {
        const keyboardShow = Keyboard.addListener('keyboardDidShow', () => Animated.spring(animation, {
            toValue: 2,
            useNativeDriver: false
        }).start() )

        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start() )

        return () => {
            keyboardShow.remove();
            keyboardHide.remove();
        }
    }, []);

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <Animated.Image
                source={Img}
                resizeMode='contain'
                style={[styles.img, { transform: [{ translateX }] }]}
            />
            <Animated.View style={{ transform: [{ translateY }] }} >
                <SignUp />
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: 280,
        height: 300,
        alignSelf: 'center'   
    }
})