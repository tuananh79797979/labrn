import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.size }} // Sử dụng uri để truyền đường dẫn URL
        style={styles.image}
      />
      <Text style={styles.text}>Tên người dùng: {product.name}</Text>
      <Text style={styles.text}>Ngày/Tháng/Năm: {product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProductDetailScreen;
