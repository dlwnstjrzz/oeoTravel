import React, { useContext, useEffect, useRef, useState } from "react";
import Styled from "styled-components/native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHeader } from "../common/header";
import Hotels from "../home/hotels";
import ModalView from "../common/modal";
import { MapContext } from "../context/mapContext";
import Markers from "./markers";
import { GOOGLE_API_KEY } from "../../constant/constants";

const Stack = createNativeStackNavigator();

const MapHome = ({ navigation }) => {
  const mapRef = useRef();
  const { modalId, fitCoor, isPress } = useContext(MapContext);

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
        <Markers />
        <ModalView modalId={modalId} navigation={navigation} />
      </MapView>
    </Container>
  );
};

const Container = Styled.View`
    flex: 1;
`;

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

export default MapScreen;
