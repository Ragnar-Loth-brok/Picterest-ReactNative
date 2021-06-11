import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native';
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ImagesView } from '../components/Home/ImagesView';


export default function HomeScreen({ navigation }) {

    const animation = useRef(new Animated.Value(0)).current;
    const [ search, setSearch ] = useState();
    const [ offSet, setOffSet ] = useState(0);
    
    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 0]
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: false
            }).start()
        })

        return unsubscribe;
    }, [navigation])

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => animation.setValue(0))
        return unsubscribe;
    }, [navigation])

    
    return (
        <View style={styles.container} >
            <Animated.View style={{ transform: [{ translateY }], marginBottom: 5 }} >
                <SearchBar 
                    placeholder='Search'
                    onChangeText={setSearch}
                    value={search}
                    containerStyle={styles.search}
                    inputContainerStyle={{backgroundColor: '#fff'}}
                    inputStyle={{ fontFamily: 'KoHo_500Medium' }}
                    showLoading
                    round
                />
            </Animated.View>
            <ScrollView
                scrollEventThrottle={10}
                // onScroll={({nativeEvent}) => {
                //     const direction = nativeEvent.contentOffset.y > offSet ? 'down' : 'up';
                //     setOffSet( () => nativeEvent.contentOffset.y > 10 ? nativeEvent.contentOffset.y : 10);

                //     if (direction == 'down') navigation.setOptions({ tabBarVisible: false });
                //     else navigation.setOptions({ tabBarVisible: true });
                // }}
            >
                <ImagesView />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    search: {
        width: Dimensions.get('window').width - 20,
        alignSelf: 'center',
        backgroundColor: '#ddd',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 50,
    },
})