import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';


export default function Main({ children }) {
    return (
        <>
            <StatusBar 
                backgroundColor='#fff'
                barStyle='light-content'
            />
            <View style={styles.container} >
                {children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    }
})
