import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Submit() {

    const navigation = useNavigation();
    const animation = useRef(new Animated.Value(0)).current;

    const translateY = animation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [-10, -5, -10]
    })

    const handlePress = () => navigation.navigate('Main');

    useEffect(() => {
        Animated.loop(Animated.timing(animation, {
            toValue: 2,
            useNativeDriver: false
        })).start()

    }, [])

    return (
        <Animated.View style={{transform: [{ translateY }]}} >
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handlePress}
            >
                <Icon 
                    name='arrowright'
                    type='antdesign'
                    iconStyle={{ transform: [{ translateX: 10 }] }}
                    color='orange'
                    size={35}
                    reverse
                />
            </TouchableOpacity>
        </Animated.View>
    )
}


const styles = StyleSheet.create({

})