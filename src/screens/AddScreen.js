import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import AddImage from '../components/AddImage/AddImage';

import Img from '../images/art29.jpg';


export default function AddScreen({ navigation }) {

    const animation = useRef(new Animated.Value(0)).current;

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start() )

        return unsubscribe;

    }, [])

    return (
        <View style={styles.container} >
            <Animated.Image 
                source={Img}
                resizeMode='contain'
                style={[styles.img, { transform: [{ translateY }] } ]}
            />
            <AddImage />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    }
})