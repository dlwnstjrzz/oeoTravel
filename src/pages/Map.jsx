import React, { useContext, useRef } from "react";
import Styled from "styled-components/native";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalView, MyHeader } from "../component";
import { MapContext } from "../context/mapContext";
import { Markers } from "../component/map";
import { DefaultHome } from "../component/home";

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
      <Stack.Screen name="detail" component={DefaultHome} />
    </Stack.Navigator>
  );
}

export default MapScreen;
