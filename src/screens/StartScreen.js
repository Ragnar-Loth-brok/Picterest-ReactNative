import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Constants from 'expo-constants';

import Start from '../components/StartComps/Start'


export default function StartScreen() {

    return (
        <>
            <View style={styles.container} >
                <Start />
            </View>
        </>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})