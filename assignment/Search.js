import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { ListCayTrong } = route.params || {};

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const performSearch = () => {
    if (ListCayTrong) {
      const results = ListCayTrong.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const renderSearchResult = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { itemId: item.id })}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={performSearch}>
          <View style={styles.searchIconContainer}>
            <Image source={require('../image/Vectorsearch.png')} style={styles.searchIcon} />
          </View>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
          placeholderTextColor="white"
          color="white"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchContainer: {
    borderRadius: 15,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141921',
    marginBottom: 40,
  },
  searchIconContainer: {
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    tintColor: 'gray',
  },
  searchInput: {
    flex: 1,
    color: 'black',
  },
});