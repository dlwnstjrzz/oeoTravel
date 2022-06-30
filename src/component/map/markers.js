import { markers } from "../../mock/latLng";
import { Marker, Callout } from "react-native-maps";
import { CustomMarker, CustomCallout } from "./customs";
import MapViewDirections from "react-native-maps-directions";
import { MapContext } from "../context/mapContext";
import { useContext } from "react";
import { GOOGLE_API_KEY } from "../../constant/key";
function Markers() {
  const { setFitCoor, setIsPress, setModalVisible, setModalId } =
    useContext(MapContext);

  return markers.map((marker, markerIdx) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
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
            strokeWidth={3}
            strokeColor={"black"}
          />
        </>
      );
    });
  });
}

export default Markers;
