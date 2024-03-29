import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const url_api = 'http://192.168.110.198:3000/products?isFavorite=1';

const Favorite = () => {
  const [favoriteItems, setFavoriteItem] = useState([]);
  const [productUpdate, setProductUpdate] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log("Bắt đầu load lại dữ liệu");

    setTimeout(() => {
      getFavoritesfromAPI();
      setRefreshing(false);
      console.log("Đã load xong");
    }, 1000);
  }, []);


  let url_Update;
  const navigation = useNavigation();

  const getFavoritesfromAPI = async () => {
    try {
      let res = await fetch(url_api);
      let data = await res.json();
      setFavoriteItem(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFavoritesfromAPI();

  }, [])
  const handleRemoveFavorite = (id) => {
    url_Update = 'http://192.168.110.198:3000/products/';
    url_Update = url_Update + id
    console.log(url_Update);
    getOne(id);







  };

  const getOne = (id) => {
    fetch('http://192.168.110.198:3000/products?id=' + id)
      .then(response => response.json())
      .then(data => {
        setProductUpdate(data);
        updatedProduct = { ...data[0] };
        updatedProduct.isFavorite = false;

        console.log(updatedProduct);
        removeFavorite(updatedProduct);

      })
      .catch(error => console.error('Error fetching data:', error));
  };


  const removeFavorite = (productFavorite) => {
    fetch(url_Update, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productFavorite)
    })
      .then((res) => {
        if (res.status == 200) {
          Alert.alert('Notification', "Successfully deleted favorites list");
          getFavoritesfromAPI();
        }
      })
      .catch((ex) => {
        console.log(ex);
      });

  }


  const handleFavoriteItemPress = (item) => {
    navigation.navigate('aaa', {
      data: item.image,
      namePro: item.nameProduct,
      withwhere: item.description,
      money: item.price,
      favorite: item.isFavorite,
      id: item.id,
      category: item.category
    });
  };

  return (
    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.title}>Favorite</Text>

      {favoriteItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.favoriteItem}
          onPress={() => handleFavoriteItemPress(item)}
        >
          <Image style={styles.favoriteItemImage} source={{ uri: item.image }} />
          <View style={styles.favoriteItemInfo}>
            <Text style={styles.favoriteItemName}>{item.nameProduct}</Text>
            <Text style={styles.favoriteItemDescription}>{item.description}</Text>
            <Text style={styles.favoriteItemPrice}>$ {item.price}</Text>
          </View>
          <TouchableOpacity style={styles.favoriteItemRemoveButton} onPress={() => handleRemoveFavorite(item.id)}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  favoriteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  favoriteItemInfo: {
    flex: 1,
    marginHorizontal: 15,
  },
  favoriteItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteItemDescription: {
    fontSize: 14,
    color: '#555',
  },
  favoriteItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#055E38', // Adjust the color to match your theme
    marginTop: 5,
  },
  favoriteItemRemoveButton: {
    padding: 10,
    borderRadius: 5,
  },
});

export default Favorite;
