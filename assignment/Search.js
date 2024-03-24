import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LienHe = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ borderRadius: 15, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', backgroundColor: '#141921', marginBottom: 40 }}>
                <TouchableOpacity>
                    <View style={{ marginHorizontal: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../image/Vectorsearch.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>
                <TextInput placeholder='Search' placeholderTextColor='white' color='white' />
            </View>
        </SafeAreaView>
    )
}

export default LienHe

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#141921',
        borderRadius: 15,
        padding: 14,
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40
        // borderRadius: 28,
        // backgroundColor: '#141921',
        // padding: 14,
        // marginRight: 100,

    },
    heading: {
        fontSize: 15,
        color: 'white'
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 1,
        borderRadius: 5,
    },
    image_start: {
        width: 10,
        height: 10,
        marginRight: 10,
        marginTop: 5
    },
})