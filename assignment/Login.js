import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation();
    const [getemail, setemail] = useState('');
    const [pass, setPass] = useState('');
    const [getPassVisible, setPassVisible] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://660eb8d5356b87a55c4fe229.mockapi.io/User')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleRegister = () => {
        navigation.navigate('Register'); // Chuyển hướng đến trang đăng ký khi nhấn vào nút "Đăng ký"
    };
    
    const handleLogin = () => {
        data.forEach(item => {
            if (getemail === item.emailAddress && pass === item.password) {
                navigation.navigate('Navigation');
            }
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.background}>
                    <Image style={styles.img} source={require('../assets/logo.jpg')} />
                    <Text style={styles.baseText}>
                        <Text style={styles.text16}>Chào mừng bạn</Text>
                        {'\n\n'}
                        <Text style={styles.text12}>Đăng nhập tài khoản</Text>
                    </Text>

                    {/* Tài khoản mật khẩu */}
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập email hoặc số điện thoại"
                        placeholderTextColor={'black'}
                        keyboardType="email-address"
                        value={getemail}
                        onChangeText={text => {
                            setemail(text);
                            console.log(text);
                        }}
                    />
                    <View style={styles.input}>
                        <TextInput
                            style={styles.input1}
                            placeholder="Mật khẩu"
                            placeholderTextColor={'black'}
                            secureTextEntry={getPassVisible ? false : true}
                            value={pass}
                            onChangeText={text => {
                                setPass(text);
                                console.log(text);
                            }}
                        />
                        <TouchableOpacity onPress={() => setPassVisible(!getPassVisible)}>
                            {getPassVisible ? (
                                <Image
                                    source={require('../assets/an.png')}
                                    style={styles.eyeImage}
                                />
                            ) : (
                                <Image
                                    source={require('../assets/hien.png')}
                                    style={styles.eyeImage}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Đăng nhập */}
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <Text style={styles.but}>Hoặc</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/google.png')}
                            style={styles.googleImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/facebook.png')}
                            style={styles.googleImage}
                        />

                    </TouchableOpacity>
                    </View>
                </View>

                {/* Đăng Ký && Quên MK */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.baseText, styles.text12]}>
                        {'\n\n'}
                        Bạn không có tài khoản
                        <TouchableOpacity
                            onPress={handleRegister} // Gọi hàm handleRegister khi nhấn vào nút "Đăng ký"
                        >
                            <Text style={styles.textOrange}> Đăng ký</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    },
    background: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 60,
    },
    baseText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 17,
    },
    text12: {
        fontSize: 12,
        color: 'black',
    },
    text16: {
        fontSize: 16,
        color: 'black'
    },
    input1: {
        fontWeight: 'bold',
        paddingStart: -2,
        width: '90%',
        color: 'black',

    },
    input: {
        alignItems: 'center',
        borderColor: '#252A32',
        borderWidth: 1,
        width: '100%',
        borderRadius: 8,
        color: 'black',
        marginTop: 20,
        paddingStart: 20,
        fontWeight: 'bold',
        height: 50,
        flexDirection: 'row',
    },
    button: {
        width: '94%',
        height: 50,
        backgroundColor: '#D17842',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginTop: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    but: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 170
    },
    buttonGG: {
        backgroundColor: 'white',
        marginTop: 5,
        justifyContent: 'space-around',
    },
    buttonTextGG: {
        color: 'black',
        paddingRight: 70,
    },
    googleImage: {
        width: 20,
        height: 20,
    },
    eyeImage: {
        width: 20,
        height: 20,
        tintColor: 'black',
    },
    textOrange: {
        color: 'black',
    }
})