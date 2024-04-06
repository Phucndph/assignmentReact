import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(true);
  const navigation = useNavigation();
  const handleEditClick = () => {
    setEditMode(true);
    setShowAdditionalButtons(false);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    setShowAdditionalButtons(true);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handle = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thông tin người dùng</Text>
      {!editMode && (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buttona} onPress={pickImage}>
            <Text style={styles.buttonTexta}>Chọn ảnh từ thư viện</Text>
          </TouchableOpacity>
          {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Tên:</Text>
        {editMode ? (
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        ) : (
          <Text style={styles.text}>{name}</Text>
        )}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        {editMode ? (
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        ) : (
          <Text style={styles.text}>{email}</Text>
        )}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Số điện thoại:</Text>
        {editMode ? (
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
        ) : (
          <Text style={styles.text}>{phone}</Text>
        )}
      </View>
      {showAdditionalButtons && (
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.5)' }}>Chung</Text>
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }} />
        </View>
      )}
      {editMode ? (
        <TouchableOpacity style={styles.buttona} onPress={handleSaveClick}>
          <Text style={styles.buttonTexta}>Lưu</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditClick}>
          <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
      )}

      {showAdditionalButtons && (
        <View>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Cẩm nang trồng cây")}>
            <Text style={styles.buttonText}>Cẩm nang trồng cây</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Lịch sử giao dịch")}>
            <Text style={styles.buttonText}>Lịch sử giao dịch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Q & A")}>
            <Text style={styles.buttonText}>Q & A</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.5)' }}>Bảo mật và điều khoản</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.5)', flex: 1 }} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Điều khoản và điều kiện")}>
            <Text style={styles.buttonText}>Điều khoản và điều kiện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Chính sách và quyền riêng tư")}>
            <Text style={styles.buttonText}>Chính sách và quyền riêng tư</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handle}>
            <Text style={styles.buttonText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  text: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
  },
  buttona: {
    borderRadius: 5,
    backgroundColor: '#00ffff',
    marginTop: 20,
  },
  buttonTexta: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
});

export default PersonalDetails;