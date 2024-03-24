import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LienHe = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <View>
                    <View style={styles.item}>
                        <Image style={styles.image}
                            source={require('../assets/logo.jpg')} />
                        <View style = {{marginLeft: 20}}>
                            <Text style={styles.heading}>Hà nội</Text>
                            <Text style = {{color: 'white'}}>Location: </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ContactForm')}>  
                            
                                    <Text style = {{marginTop: 5, color: 'orange'}}>Liên hệ</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

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