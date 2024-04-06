import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import PaymentScreen from './PaymentScreen ';
const CartScreen = () => {
  <PaymentScreen calculateTotalPrice={calculateTotalPrice} />
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cây trang trí',
      price: 200000,
      quantity: 2,
      image: require('../assets/cay.png'),
      isChecked: false,
    },
    {
      id: 2,
      name: 'Cây để bàn',
      price: 200000,
      quantity: 1,
      image: require('../assets/cay.png'),
      isChecked: false,
    },
    // Add more cart items as needed
  ]);

  const handleCheckboxToggle = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.price * item.quantity;
      }
    });
    return totalPrice;
  };
  const handleProceedToPayment = () => {
    const totalPrice = calculateTotalPrice(); // Tính tổng số tiền

    navigation.navigate('PaymentScreen', { totalPrice: calculateTotalPrice() });
  };
  const navigation = useNavigation()
  const route = useRoute();

  useEffect(() => {
    const selectedItem = route.params?.selectedItem;
    if (selectedItem) {
      setCartItems(prevItems => [...prevItems, selectedItem]);
    }
  }, [route.params?.selectedItem]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
            <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 90 }}>Giỏ hàng</Text>
      </View>
      {cartItems.map((item) => (
        // Kiểm tra xem item có tồn tại không trước khi truy cập thuộc tính id
        item && (
          <View key={item.id} style={styles.cartItemContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxToggle(item.id)}
            >
              {item.isChecked && <Text>✓</Text>}
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Giá: {item.price}</Text>
              <Text style={styles.itemQuantity}>Số lượng: {item.quantity}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  <Text style={{ fontSize: 40 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 25 }}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  <Text style={{ fontSize: 30 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteItem(item.id)}
            >
              <Text style={styles.deleteButtonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )
      ))}
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>
          Tổng số tiền: {calculateTotalPrice()}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleProceedToPayment}
      >
        <Text style={styles.buttonText}>Tiến hành thanh toán</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
    marginTop: 20
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  checkbox: {
    marginRight: 10,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
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
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  totalPriceContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '94%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: 40
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default CartScreen;