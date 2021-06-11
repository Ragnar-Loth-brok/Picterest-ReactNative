import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export default function NavLink({ onPress, text, signup=false }) {

    const animation = useRef(new Animated.Value(0)).current;

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0]
    })

    useEffect(() => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: 1
        }).start()
    })


    return (
        <Animated.View style={{ alignSelf: 'center', marginTop: signup ? 25: 100, transform: [{ translateY }] }} >
            <Button 
                title={text}
                onPress={onPress}
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
            />
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    buttonTitle: {
        fontFamily: 'KoHo_500Medium',
        letterSpacing: 2,
        fontSize: 20,
        color: 'dodgerblue',
        borderBottomColor: 'dodgerblue',
        borderBottomWidth: 2,
    },
    button: {
        backgroundColor: 'transparent',
        width: 110
    }
})