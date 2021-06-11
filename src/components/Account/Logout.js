import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Animated, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';


export default function Logout() {
    const navigation = useNavigation();

    const animation = useRef(new Animated.Value(0)).current;

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0]
    })

    const handlePress = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: false
        }).start(() => navigation.navigate('Start'))
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start() )

        return unsubscribe;

    }, [])

    return (
        <Animated.View style={[styles.container, { transform: [{ translateY }] }]} >
            <Button 
                title='Logout'
                onPress={handlePress}
                icon={() => 
                    <Icon 
                        name='logout'
                        size={25}
                        type='antdesign'
                        color='#fff'
                        style={{ marginLeft: 10 }}
                    />
                }
                iconRight
                titleStyle={{fontFamily: 'KoHo_500Medium', letterSpacing: 2, }}
                buttonStyle={styles.button}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 220
    },
    button: {
        width: 170,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#325288',
        borderColor: '#fff',
        borderWidth: 2,
        overflow: 'hidden'
    },
})