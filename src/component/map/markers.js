import { markers } from "../../mock/latLng";
import { Marker, Callout } from "react-native-maps";
import { CustomMarker, CustomCallout } from "./customs";
import MapViewDirections from "react-native-maps-directions";
import { MapContext } from "../context/mapContext";
import { useContext, useState } from "react";
import { GOOGLE_API_KEY } from "../../constant/constants";

function Markers() {
  const {
    isPress,
    setFitCoor,
    setIsPress,
    setModalVisible,
    setModalId,
    modalId,
  } = useContext(MapContext);

  return markers.map((marker, markerIdx) => {
    const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    return marker.latLng.map((coor, coorIdx) => {
      return (
        <>
          {coorIdx === 0 ? (
            <Marker
              identifier="ab"
              coordinate={coor}
              onPress={() => {
                setFitCoor(marker.latLng);
                setIsPress(true);
                setModalId(markerIdx);
              }}
            >
              <CustomMarker dayCount={marker.dayCount} />
              <Callout
                tooltip
                onPress={() => {
                  setModalVisible(true);
                  setModalId(markerIdx);
                }}
              >
                <CustomCallout />
              </Callout>
            </Marker>
          ) : (
            ""
          )}

          <MapViewDirections
            origin={coor}
            destination={marker.latLng[coorIdx + 1]}
            apikey={GOOGLE_API_KEY}
            strokeWidth={modalId === markerIdx ? 10 : 3}
            strokeColor={modalId === markerIdx ? "red" : "black"}
          />
        </>
      );
    });
  });
}

export default Markers;
