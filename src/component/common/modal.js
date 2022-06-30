import { useContext } from "react";
import { Alert, Modal, Text, StyleSheet, View, Pressable } from "react-native";
import { Items } from "../map/customs";
import { MapContext } from "../context/mapContext";

export default function ModalView({ modalId, navigation }) {
  const { modalVisible, setModalVisible } = useContext(MapContext);
  return (
    <Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalId}</Text>
            <Items
              onPressHandler={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("detail");
              }}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
