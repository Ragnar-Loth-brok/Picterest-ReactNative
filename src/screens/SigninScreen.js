import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, View } from 'react-native';

import SignIn from '../components/LoginFlow/SignIn';
import Img from '../images/art11.png';


const { width } = Dimensions.get('window');

export default function SigninScreen({ navigation }) {
    const animation = useRef(new Animated.Value(0)).current;

    const translateX = animation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [ -width, 0, width],
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
        <View style={{ backgroundColor: '#fff', flex: 1 }} >
            <Animated.Image
                source={Img}
                resizeMode='contain'
                style={[styles.img, { transform: [{ translateX }] }]}
            />
            <Animated.View style={{ transform: [{ translateY }] }} >
                <SignIn />
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