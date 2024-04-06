import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const DetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { itemId } = route.params;
    return (
        <View>
            <Text>{itemId}</Text>
        </View>
    );
};

export default DetailScreen;
