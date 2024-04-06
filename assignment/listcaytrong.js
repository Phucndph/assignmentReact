import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ListCayTrong = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Cay trang tri',
            price: 200000,
            quantity: 2,
            image: require('../assets/cay.png'),
        },
        {
            id: 2,
            name: 'Caythong',
            price: 300000,
            quantity: 13,
            image: require('../assets/cay.png'),
        },
        {
            id: 3,
            name: 'Cay tao',
            price: 500000,
            quantity: 100,
            image: require('../assets/cay.png'),
        },
        {
            id: 4,
            name: 'Cay buoi',
            price: 3060000,
            quantity: 20,
            image: require('../assets/cay.png'),
        },
        {
            id: 5,
            name: 'Cay hong',
            price: 30660000,
            quantity: 15,
            image: require('../assets/cay.png'),
        },
        {
            id: 6,
            name: 'Cay xanh',
            price: 30022000,
            quantity: 18,
            image: require('../assets/cay.png'),
        },
        {
            id: 7,
            name: 'Sen da',
            price: 30055000,
            quantity: 10,
            image: require('../assets/cay.png'),
        },
    ]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handlePress = (item) => {
        setSelectedItem(item.id);
    };

    useEffect(() => {
        const selectedItem = route.params?.selectedItem;
        if (selectedItem) {
            setCartItems(prevItems => [...prevItems, selectedItem]);
        }
    }, [route.params?.selectedItem]);

    const dataCFCountry = [
        { id: 1, country: 'Cây cảnh' },
        { id: 2, country: 'Chậu cây' },
        { id: 3, country: 'Cây trang trí bể cá' },
        { id: 4, country: 'Hoa' },
        { id: 5, country: 'Cây trang trí phòng ngủ ' },
    ];
    navigation.navigate('Search', { ListCayTrong: cartItems });
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            width: 34,
                            height: 34,
                            borderRadius: 14,
                        }}>
                        <Image
                            source={require('../image/Vectorback.png')}
                            tintColor={'gray'}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CartScreen');
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 34,
                            height: 34,
                            borderRadius: 14,
                        }}>
                        <Image
                            style={styles.imgHeader}
                            source={require('../image/buy.png')}
                        />
                    </View>

                </TouchableOpacity>
            </View>

            <ScrollView>
                <FlatList
                    horizontal={true}
                    style={{ marginBottom: 30 }}
                    scrollEnabled={true}
                    data={dataCFCountry}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <Text
                                style={[
                                    styles.textName,
                                    {
                                        textAlign: 'center',
                                        color: item.id === selectedItem ? 'black' : 'black',
                                    },
                                ]}>
                                {item.country}
                                {'\n'}
                                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: item.id === selectedItem ? 'black' : 'white' }}></View>
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <FlatList
                    horizontal={false}
                    scrollEnabled={true}
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()} // Chỉ định keyExtractor cho FlatList
                    renderItem={({ item }) => (
                        <View key={item.id} style={styles.cartItemContainer}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPrice}>Giá: {item.price}</Text>
                                <Text style={styles.itemQuantity}>Số lượng: {item.quantity}</Text>
                            </View>
                        </View>
                    )}
                />



            </ScrollView>
        </SafeAreaView>
    );
};

export default ListCayTrong;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
    },
    header: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
    },
    textName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 20,
        color: '#52555A',
    },
    textBase: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    itemPrice: {
        fontSize: 20
    },
    itemQuantity: {
        fontSize: 20
    },
});
