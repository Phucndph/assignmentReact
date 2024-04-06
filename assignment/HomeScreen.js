/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('');
  useEffect(() => {
    axios
      .get('https://65c4f22adae2304e92e3b433.mockapi.io/products')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);


  const [selectedItem, setSelectedItem] = useState(1);

  const handlePress = item => {
    setSelectedItem(item?.id);
    navigation.navigate('Caytrong');
  };

  const handleType = (type) => {
    if (type = 'All') {

    }
  }
  const handle = () => {
    navigation.navigate('ListCayTrong');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 40,
            }}>
            Planta - tỏa sáng {'\n'}không gian nhà bạn
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CartScreen');
            }}>
            <Image
              style={styles.imgHeader}
              source={require('../assets/buy.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handle} style={{ marginVertical: 20 }}>
          <Text style={[styles.textBase, { fontSize: 18 }]}>Cây trồng</Text>
        </TouchableOpacity>

        <FlatList
          horizontal={true}
          scrollEnabled={true}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.item}>
                {/* Ảnh itemSanPham */}
                <View style={styles.item_anh}>
                  <Image
                    style={styles.item_anh_img}
                    source={require('../assets/cay.png')}
                  />
                </View>
                {/* Nội dung */}
                <View>
                  <Text style={[styles.textBase]}>
                    {'\n'}
                    Cây để bàn {'\n'}
                    <Text style={{ fontSize: 10 }}>With FPT</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}></FlatList>

        <TouchableOpacity onPress={handle} style={{ marginVertical: 20 }}>
          <Text style={[styles.textBase, { fontSize: 18 }]}>Chậu Cây</Text>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          scrollEnabled={true}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <View style={styles.item}>
                {/* Ảnh itemSanPham */}
                <View style={styles.item_anh}>
                  <Image
                    style={styles.item_anh_img}
                    source={require('../assets/cay.png')}
                  />
                </View>
                {/* Nội dung */}
                <View>
                  <Text style={[styles.textBase]}>
                    {'\n'}
                    Cây để bàn {'\n'}
                    <Text style={{ fontSize: 10 }}>With FPT</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
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
  textName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#52555A',
  },
  textBase: {
    color: 'black',
    fontSize: 16,
  },
  item: {
    borderRadius: 28,
    backgroundColor: '#7fffd4',
    padding: 14,
    width: 150,
    height: 250,
    marginRight: 15,
  },
  item_anh: {
    flexDirection: 'row',
    width: '100%',
    height: '60%',
  },
  item_anh_img: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  item_anh_img_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 70,
    height: 22,
    width: 50,
    position: 'absolute',
    right: 0,
    paddingVertical: 3,
  },
  item_noidung: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  item_noidung_img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#D17842',
    borderRadius: 6,
  },
});
