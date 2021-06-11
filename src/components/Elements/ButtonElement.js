import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export default function ButtonElement({ buttonPress, text }) {
    

    return (
        <Button
            title={text}
            titleStyle={{fontFamily: 'KoHo_500Medium', letterSpacing: 2}}
            buttonStyle={styles.button}
            onPress={buttonPress}
        />
    )
}


const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: '#325288',
        borderColor: '#fff',
        borderWidth: 1,
    },
})