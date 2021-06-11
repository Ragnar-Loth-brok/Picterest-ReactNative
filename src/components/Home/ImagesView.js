import React from 'react'
import { View, StyleSheet } from 'react-native'

import data from '../../data';
import ImageRender from './ImageRender';


export const ImagesView = React.memo(() => {

    return (
        <View style={styles.container} >
            <View>
                {
                    data.map((item, index) => index%2 === 0 ? <ImageRender image={item} key={index} /> : null)
                }
            </View>
            <View>
                {
                    data.map((item, index) => index%2 !== 0 ? <ImageRender image={item} key={index} /> : null)
                }
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
})