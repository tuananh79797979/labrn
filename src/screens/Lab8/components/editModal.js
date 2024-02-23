import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditModal = ({ visible, onClose, onSave, product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price.toString());
  const [size, setSize] = useState(product.size);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price.toString());
    setSize(product.size);
  }, [product]);

  const handleSave = () => {
    const updatedProduct = {
      ...product,
      name: name,
      price: price,
      size: size,
    };
    onSave(updatedProduct);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 30,
              alignSelf: "center",
            }}
          >
            Edit
          </Text>
          <Text>Tên người dùng</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <Text style={{ marginTop: 5 }}>Ngày/Tháng/Năm</Text>

          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Price"
          />
          <Text style={{ marginTop: 5 }}>Đường dẫn ảnh</Text>

          <TextInput
            style={styles.input}
            value={size}
            onChangeText={setSize}
            placeholder="Size"
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <Button title="Cancel" onPress={onClose} />
            <Button title="Save" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
