import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native';
import { View, Animated, StyleSheet } from 'react-native'
import Logout from '../components/Account/Logout';
import ProfileAnimate from '../components/Account/ProfileAnimate';

import Img from '../images/art7.png';


export default function AccountScreen({ navigation }) {

    const animation = useRef(new Animated.Value(0)).current;
    const viewAnimation = useRef(new Animated.Value(0)).current


    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
    })

    const scale = viewAnimation.interpolate({
        inputRange: [0, 4],
        outputRange: [0, 1]
    })

    const borderRadius = viewAnimation.interpolate({
        inputRange: [0, 4],
        outputRange: [500, 50]
    })


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start() )

        return unsubscribe;
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Animated.sequence([
                Animated.timing(viewAnimation, {
                    toValue: 2.5,
                    duration: 200,
                    easing: Easing.bounce,
                    useNativeDriver: false
                }),
                Animated.timing(viewAnimation, {
                    toValue: 0.5,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.spring(viewAnimation, {
                    toValue: 4,
                    useNativeDriver: false
                }),
            ]).start()
        })

        return unsubscribe;
    }, [])

    return (
        <View style={styles.container} >
            <Animated.Image 
                source={Img}
                resizeMode='contain'
                style={[styles.img, { transform: [{ translateY }] } ]}
                
            />
            <View style={styles.profile} >
                <ProfileAnimate />
            </View>
            <View style={{ width: 400, height: 2, backgroundColor: '#fff', alignSelf: 'center' }} />
            <Logout />
            <Animated.View style={[styles.account, { transform: [{ scale }], borderRadius }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    img: {
        width: 280,
        height: 300,
        alignSelf: 'center'
    },
    profile: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 40,
    },
    account: {
        position: 'absolute',
        top: 280,
        left: 7,
        zIndex: -1,
        backgroundColor: 'rgba(102, 204, 255, 0.3)',
        borderRadius: 50,
        height: 560,
        width: 400
    }
})
