import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';


export default function ImageRender({ image }) {

    const height = [200, 300, 230, 270]

    return (
        <View>
            <Image 
                source={image}
                style={[ styles.image, { height: height[ Math.floor(Math.random() * 4)] } ]}
                transition={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    image: {
        width: 192,
        borderRadius: 25,
        marginVertical: 5
    },
})