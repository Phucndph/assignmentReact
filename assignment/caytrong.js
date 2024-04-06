import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

const Caytrong = ({ item }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation()
  const handleAddToCart = (product) => {
    setSelectedItem(product); // Cập nhật state selectedItem với thông tin sản phẩm được chọn
    navigation.navigate('CartScreen');
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Số lượng ban đầu là 1
      isChecked: false, // Trạng thái checkbox ban đầu là false
      image: product.image, // URL hình ảnh sản phẩm
    };

    // Thêm mục mới vào mảng cartItems
    setCartItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.item]}>
          {/* Ảnh */}
          <View style={{ width: '100%', height: '85%' }}>
            {/* anh san SanPham */}
            <Image
              style={[styles.item_img]}
              source={require('../assets/cay.png')}
            />

            {/* phan thong tin  */}
            <View style={[styles.item_img_info]}>
              <View style={styles.item_img_info_row}>
                <View style={{ width: '100%' }}>
                  <Text
                    style={[
                      styles.textBase,
                      { fontSize: 20, fontWeight: 'bold' },
                    ]}>
                    Cây Để Bàn
                  </Text>
                  <Text
                    style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>
                    With FPT
                  </Text>
                </View>

                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View style={styles.item_img_info_row_ic}>
                    <Image
                      source={require('../image/Vectorwater.png')}
                      tintColor={'#D17842'}
                    />
                    <Text
                      style={[
                        styles.textBase,
                        { fontSize: 10, color: '#AEAEAE', textAlign: 'center' },
                      ]}>
                      Ưa Nước
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.item_img_info_row}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../image/Vectorstart.png')}
                    tintColor={'#D17842'}
                  />
                  <Text
                    style={[
                      styles.textBase,
                      { fontSize: 20, fontWeight: 'bold', marginHorizontal: 7 },
                    ]}>
                    4.5
                  </Text>
                  <Text
                    style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>
                    (6,879)
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.item_heart]}>
              <View
                style={[
                  styles.item_img_info_row_ic,
                  { width: 34, height: 34, marginLeft: 40 },
                ]}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack()
                }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                    <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CartScreen');
                }}
              >
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 14 }}>
                  <Image source={require('../image/buy.png')} tintColor={'black'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Nội dung */}
          <View style={{ padding: 20, width: '100%', height: '50%' }}>
            <Text style={[styles.textBase]}>
              <Text
                style={[{ color: '#AEAEAE', fontWeight: 'bold', fontSize: 16 }]}>
                Chú thích
              </Text>
              {'\n'}Là một loại cây ưa nước và ánh sáng
              {'\n'}mặt trời rất thích hợp để trang trí bàn
              {'\n'}làm việc.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              { color: '#AEAEAE', fontWeight: 'bold', fontSize: 16, padding: 20 },
            ]}>
            Kích cỡ
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.text_size}>
              <Text style={{ color: 'white', fontSize: 20 }}>Nhỏ</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View>
            <Text
              style={{ color: 'white', marginLeft: 40, alignItems: 'center' }}>
              Giá
            </Text>
            <View style={styles.price}>
              <Text style={[styles.price, { color: 'white', marginLeft: 10 }]}>
                200000
              </Text>
            </View>
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
          <TouchableOpacity onPress={() => handleAddToCart(item)}>
            <Text style={styles.cart}>Chọn mua</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Caytrong;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '100%',
  },
  header: {
    backgroundColor: '#0C0F14',
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
  textBase: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  item: {
    width: '100%',
    height: 650,
  },

  item_img: {
    width: '100%',
    height: 550,
  },
  item_img_info: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
  },
  item_img_info_row: {
    width: '50%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item_img_info_row_ic: {
    flexDirection: 'column',
    backgroundColor: '#0C0F14',
    padding: 5,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 45,
    height: 45,
  },
  item_heart: {
    position: 'absolute',
    width: '100%',
    top: 20,
    right: 20,
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text_size: {
    flexDirection: 'row',
    backgroundColor: '#141921',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 35,
  },
  price: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    color: 'white',
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 50,
    textAlign: 'center',
    paddingHorizontal: 85,
    paddingVertical: 15,
    fontSize: 15,
    backgroundColor: '#D17842',
  },
});
