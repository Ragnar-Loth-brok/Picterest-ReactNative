import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Dimensions, StyleSheet, View, Animated } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { Easing } from 'react-native';


const { width } = Dimensions.get('window');


export default function Form({ signup=false }) {
    const navigation = useNavigation();
    const animation_one = useRef(new Animated.Value(0)).current;
    const animation_two = useRef(new Animated.Value(0)).current;
    const animation_three = useRef(new Animated.Value(0)).current;

    const input1TranslateX = animation_one.interpolate({
        inputRange: [0, 1],
        outputRange: [ width, 0]
    });

    const input2TranslateX = animation_two.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0]
    })

    const input3TranslateX = animation_three.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0]
    })

    useEffect(() => {
        Animated.timing(animation_one, {
            toValue: 1,
            useNativeDriver: false,
            duration: 400,
            easing: Easing.elastic(1)
        }).start()

        Animated.timing(animation_two, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.elastic(1)
        }).start()

        Animated.timing(animation_three, {
            toValue: 1,
            duration: 600,
            useNativeDriver: false,
            easing: Easing.elastic(1)
        }).start()

    }, [])

    
    return (
        <View style={styles.container} >
            <Animated.View style={{ transform: [{ translateX: input1TranslateX }] }} >
                { signup && 
                    <Input 
                        placeholder='name'
                        leftIcon={
                            <Icon 
                                name='user'
                                type='entypo'
                                size={24}
                                color='#aaa'
                                />
                            }
                            inputStyle={styles.input}
                            containerStyle={styles.inputContainer}
                            />
                        }
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: input2TranslateX }] }} >
                <Input 
                    placeholder='email'
                    leftIcon={
                        <Icon 
                            name='email'
                            size={24}
                            color='#aaa'
                        />
                    }
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: input3TranslateX }] }} >
                <Input 
                    placeholder='password'
                    leftIcon={
                        <Icon 
                            name='lock'
                            size={24}
                            color='#aaa'
                        />
                    }
                    inputStyle={styles.input}
                    containerStyle={styles.inputContainer}
                />
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 10,
        fontFamily: 'KoHo_500Medium',
        color: '#000',
        letterSpacing: 1
    },
    inputContainer: {
        width: width - 50
    }
})