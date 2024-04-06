import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ToastAndroid, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = ({ route }) => {

    const navigation = useNavigation()

    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerDc, setCustomerDc] = useState('');
    const [customerSdt, setCustomerSdt] = useState('');

    const [shippingMethod, setShippingMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const [isPaymentSelected, setIsPaymentSelected] = useState(false);
    const [isShippingSelected, setIsShippingSelected] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { totalPrice } = route.params;
    const { selectedItems } = route.params;
    const handlePayment = () => {
        const totalPrice = selectedItems ? selectedItems.reduce((total, item) => total + item.price, 0) : 0; const totalPriceWithShipping = totalPrice + shippingCost;

        ToastAndroid.show('Đặt hàng thành công', ToastAndroid.SHORT);
        navigation.goBack();
    };

    const handleShippingMethodSelection = (method) => {
        setShippingMethod(method);
        if (method === 'Fast Shipping') {
            setShippingCost(15000);
        } else if (method === 'COD') {
            setShippingCost(20000);
        }
        setIsShippingSelected(true);
    };

    const handlePaymentMethodSelection = (method) => {
        setPaymentMethod(method);
        setIsPaymentSelected(true);
    };

    return (
        <View style={styles.containers}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.container}>

                <Text style={styles.title}>Thông tin khách hàng</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Họ và tên"
                    value={customerName}
                    onChangeText={setCustomerName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={customerEmail}
                    onChangeText={setCustomerEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ"
                    value={customerDc}
                    onChangeText={setCustomerDc}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    value={customerSdt}
                    onChangeText={setCustomerSdt}
                />

                <Text style={styles.title}>Phương thức vận chuyển</Text>
                <TouchableOpacity
                    style={[styles.shippingMethodButton, shippingMethod === 'Fast Shipping' ? styles.selectedButton : null]}
                    onPress={() => handleShippingMethodSelection('Fast Shipping')}
                >
                    <Text style={styles.shippingMethodText}>Giao hàng nhanh</Text>
                    {shippingMethod === 'Fast Shipping' && <Text style={styles.selectedText}>✓</Text>}
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.shippingMethodButton, shippingMethod === 'COD' ? styles.selectedButton : null]}
                    onPress={() => handleShippingMethodSelection('COD')}
                >
                    <Text style={styles.shippingMethodText}>Giao hàng COD</Text>
                    {shippingMethod === 'COD' && <Text style={styles.selectedText}>✓</Text>}
                </TouchableOpacity>

                <Text style={styles.title}>Phương thức thanh toán</Text>
                <TouchableOpacity
                    style={[styles.paymentMethodButton, paymentMethod === 'Credit Card' ? styles.selectedButton : null]}
                    onPress={() => handlePaymentMethodSelection('Credit Card')}
                >
                    <Text style={styles.paymentMethodText}>Credit Card</Text>
                    {paymentMethod === 'Credit Card' && <Text style={styles.selectedText}>✓</Text>}
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.paymentMethodButton, paymentMethod === 'PayPal' ? styles.selectedButton : null]}
                    onPress={() => handlePaymentMethodSelection('PayPal')}
                >
                    <Text style={styles.paymentMethodText}>PayPal</Text>
                    {paymentMethod === 'PayPal' && <Text style={styles.selectedText}>✓</Text>}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.paymentButton}
                    onPress={handlePayment}
                    disabled={!isPaymentSelected || !isShippingSelected}
                >
                    <Text style={styles.paymentButtonText}>Thanh toán</Text>
                </TouchableOpacity>

                <Text style={styles.totalAmountText}>Tổng số tiền: {totalPrice + shippingCost}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containers: {
        flex: 1,
        margin:20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    shippingMethodButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    selectedButton: {
        backgroundColor: 'lightblue',
    },
    shippingMethodText: {
        marginRight: 5,
    },
    selectedText: {
        fontWeight: 'bold',
    },
    paymentMethodButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    paymentMethodText: {
        marginRight: 5,
    },
    paymentButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    paymentButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalAmountText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;