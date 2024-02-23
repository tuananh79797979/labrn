import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import EditModal from "./components/editModal";
import { FAB } from "react-native-paper"; // Import FAB from react-native-paper

const url_API = "http://localhost:3000/Products";
let idPro;
// b rs lai may di
const ListProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
    useState(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: "3562",
    name: "A",
    price: "52",
    size: "S",
    quantity: "1",
  });

  const handleCancelDelete = () => {
    setDeleteConfirmationVisible(false);
  };

  const handleConfirmDelete = () => {
    fetch(url_API + `/${idPro}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 200) {
          Alert.alert("Thông báo", "Xóa thành công");
          getDataFromAPI();
          setDeleteConfirmationVisible(false);
        }
      })
      .catch((ex) => console.log(ex));
  };

  useFocusEffect(
    React.useCallback(() => {
      getDataFromAPI();
    }, [])
  );

  const handleEdit = (item) => {
    setSelectedProduct(item);
    setIsModalEditVisible(true);
  };

  const handleUpdate = (updatedProduct) => {
    fetch(url_API + `/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (res.status == 200) {
          console.log("Successfully fetch");
          getDataFromAPI();
          setIsModalEditVisible(false);
          Alert.alert("Success");
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const handleDelete = (id) => {
    setDeleteConfirmationVisible(true);
    idPro = id;
  };

  const handleProductPress = (item) => {
    navigation.navigate("infor", { product: item });
  };

  const getDataFromAPI = () => {
    fetch(url_API)
      .then((respon) => respon.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("error feting data: ", err));
  };

  const handleRefresh = () => {
    getDataFromAPI();
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View style={styles.boxItem}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDetail}>Birthday: {item.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleEdit(item)}
          >
            <Icon name="edit" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButtonDelete}
            onPress={() => handleDelete(item.id)}
          >
            <Icon name="trash" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => index.toString()}
        refreshing={false}
        onRefresh={handleRefresh}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("AddProduct")}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteConfirmationVisible}
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Bạn có chắc chắn muốn xóa không?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#000" }}
                onPress={handleCancelDelete}
              >
                <Text style={styles.textStyle}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: "#FF0000" }}
                onPress={handleConfirmDelete}
              >
                <Text style={styles.textStyle}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <EditModal
        visible={isModalEditVisible}
        onClose={() => setIsModalEditVisible(false)}
        onSave={handleUpdate}
        product={selectedProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  list: {
    marginTop: 20,
  },
  boxItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 16,
    marginBottom: 3,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonDelete: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  iconButton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    margin: 36,
    right: 0,
    bottom: 0,
    backgroundColor: "#4285F4",
  },
});

export default ListProductScreen;
