import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons from expo vector icons

const AddProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const url_API = "http://localhost:3000/Products";

  const addProduct = () => {
    function validateSize(size) {
      const sizeRegex = /^(XS|S|M|L|XL)$/;

      return sizeRegex.test(size);
    }

    const addProductToData = (product) => {
      fetch(url_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((res) => {
        if (res.status == 201) {
          Alert.alert("Success");
          setName("");
          setPrice("");
          setQuantity("");
          setSize("");
        }
      });
    };

    if (!name.trim() || !price.trim() || !size.trim()) {
      Alert.alert("Thông báo", "Vui lòng điền đầy đủ thông tin");
    } else {
      const productAdd = {
        name: name,
        price: price,
        size: size,
      };
      addProductToData(productAdd);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Tên người dùng:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text style={styles.label}>Ngày/Tháng/Năm:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPrice(text)}
          value={price}
        />
        <Text style={styles.label}>Đường dẫn ảnh:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSize(text)}
          value={size}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={addProduct}>
        <MaterialIcons name="check" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddProductScreen;
