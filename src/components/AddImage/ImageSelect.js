import React, { useEffect, useRef, useState } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Button, Icon } from 'react-native-elements';


export default function ImageSelect() {

    const [image, setImage] = useState();
    const animation = useRef(new Animated.Value(0)).current;

    const translateX = animation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [-200, 100, 30]
    })

    const scale = animation.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1]
    })

    const marginTop = animation.interpolate({
        inputRange: [1, 1.1],
        outputRange: [50, 0],
        extrapolate: 'clamp'
    })

    useEffect(() => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false
        }).start()
    }, [])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) setImage(result.uri);
        if (!result.cancelled) Animated.timing(animation, {
            toValue: 2,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    return (
        <>
            <View style={styles.container}>
                {
                    image &&
                    <Animated.Image 
                        source={{ uri: image }} style={[styles.image, { transform: [{ scale }] }]}
                    />
                }
                <Animated.View style={[styles.addView, { transform: [{ translateX }], marginTop } ]} >
                    <Icon 
                        name='images'
                        type='entypo'
                        size={40}
                        color='#fff'
                    />
                    <Button 
                        title='Add'
                        onPress={pickImage}
                        titleStyle={{fontFamily: 'KoHo_500Medium', letterSpacing: 1, marginLeft: 10}}
                        buttonStyle={styles.button}
                        icon={
                            <Icon 
                                name='image'
                                type='feather'
                                color='#fff'
                            />
                        }
                    />
                </Animated.View>
            </View>
            {
                image &&
                <Animated.View style={{ transform: [{ scale }] }} >
                    <Button 
                        title='Upload'
                        onPress={pickImage}
                        titleStyle={{fontFamily: 'KoHo_500Medium', letterSpacing: 1, marginRight: 10, fontSize: 20}}
                        buttonStyle={styles.finishButton}
                        icon={
                            <Icon 
                                name='cloudupload'
                                type='ant-design'
                                color='#fff'
                                size={30}
                            />
                        }
                        iconRight
                    />
                </Animated.View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },
    addView: {
        backgroundColor: '#ddd',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#336699',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 2
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 20
    },
    finishButton: {
        width: 150,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#336699',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 2
    }
})