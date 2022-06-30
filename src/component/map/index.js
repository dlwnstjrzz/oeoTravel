import React, { useEffect, useRef, useState } from "react";
import Styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHeader } from "../common/header";
import Hotels from "../home/hotels";
import { Ionicons } from "@expo/vector-icons";
import CustomCallout from "./customs";
import { Alert, Modal, Text, StyleSheet, View } from "react-native";
import { Items } from "./customs";
import { markers, maxCoor } from "../../mock/latLng";

const Stack = createNativeStackNavigator();
const Container = Styled.View`
    flex: 1;
`;
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const GOOGLE_API_KEY = "AIzaSyBWv0jXpMTE0VSY9yEYsfM7MOzjpsK9lQw";

function CustomMarker({ dayCount }) {
  return (
    <CustomMarkerWrapper>
      <TextWrapper>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 15,
            color: "white",
          }}
        >
          {` day${dayCount}`}
        </Text>
        <Ionicons name="chevron-forward-outline" size={20} color={"white"} />
      </TextWrapper>
      <Ionicons name="flag-outline" size={40} />
    </CustomMarkerWrapper>
  );
}
const TextWrapper = Styled.View`
backgroundColor: black;
borderRadius: 10;
flex: 1;
flexDirection: row;
justify-content: space-between;
`;
const CustomMarkerWrapper = Styled.View`
  margin-left: 30;
  backgroundColor: transparent;
  flex: 1;
  alignItems: center;
  flexDirection: column;
  `;

const MapHome = ({ navigation }) => {
  const mapRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [fitCoor, setFitCoor] = useState(maxCoor);
  const [isPress, setIsPress] = useState(false);
  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        ref={mapRef}
        onLayout={() =>
          mapRef.current.fitToCoordinates(fitCoor, {
            edgePadding: { top: 10, right: 40, bottom: 10, left: 50 },
            animated: true,
          })
        }
      >
        {isPress
          ? fitCoor.map((coors, idx) => {
              return (
                <MapViewDirections
                  origin={coors}
                  destination={fitCoor[idx + 1]}
                  apikey={GOOGLE_API_KEY}
                  strokeWidth={5}
                  strokeColor="black"
                />
              );
            })
          : ""}

        {markers.map((marker, markerIdx) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return marker.latLng.map((coor, coorIdx) => {
            return (
              <>
                {coorIdx === 0 ? (
                  <Marker
                    coordinate={coor}
                    onPress={() => {
                      setFitCoor(marker.latLng);
                      console.log(fitCoor);
                      setIsPress(true);
                    }}
                  >
                    <CustomMarker dayCount={marker.dayCount} />
                  </Marker>
                ) : (
                  ""
                )}

                <MapViewDirections
                  origin={coor}
                  destination={marker.latLng[coorIdx + 1]}
                  apikey={GOOGLE_API_KEY}
                  strokeWidth={3}
                  strokeColor={`#${randomColor}`}
                />
              </>
            );
          });
        })}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <CustomMarker />
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
                <Text style={styles.modalText}>Hello World!</Text>

                <Items
                  onPressHandler={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("detail");
                  }}
                />
              </View>
            </View>
          </Modal>

          <Callout tooltip onPress={() => setModalVisible(true)}>
            <CustomCallout />
          </Callout>
        </Marker>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
    </Container>
  );
};

function MapScreen() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation, route, options }) => {
          return (
            <MyHeader
              title=""
              style={{
                backgroundColor: "black",
                height: 0,
                justifyContent: "center",
                marginTop: 0,
              }}
            />
          );
        },
      })}
      initialRouteName="map"
    >
      <Stack.Screen name="map" component={MapHome} />
      <Stack.Screen name="detail" component={Hotels} />
    </Stack.Navigator>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default MapScreen;
