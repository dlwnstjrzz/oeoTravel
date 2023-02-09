import { useContext } from "react";
import { Alert, Modal, Text, StyleSheet, View, Pressable } from "react-native";
import { Items } from "../map/customs";
import { MapContext } from "../context/mapContext";
import { schedule } from "../../mock/schedule";

export default function ModalView({ navigation }) {
  const { modalVisible, setModalVisible, modalId } = useContext(MapContext);
  return (
    <Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {schedule[modalId]?.map((scheduleInfo) => {
              return (
                <View>
                  <Text
                    style={styles.titleText}
                  >{`day${scheduleInfo.day}`}</Text>
                  <Text style={styles.modalText}>{scheduleInfo.content}</Text>
                </View>
              );
            })}

            <Items
              onPressHandler={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("detail");
              }}
              title={"티켓 확인"}
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
    lineHeight: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
    lineHeight: 20,
  },
});
