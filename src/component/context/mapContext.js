import { useState, createContext } from "react";
import { maxCoor } from "../../mock/latLng";

const MapContext = createContext(null);

function MapInfoContext(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fitCoor, setFitCoor] = useState(maxCoor);
  const [isPress, setIsPress] = useState(false);
  const [modalId, setModalId] = useState("");

  const mapInfo = {
    modalVisible,
    setModalVisible,
    fitCoor,
    setFitCoor,
    isPress,
    setIsPress,
    modalId,
    setModalId,
  };
  return (
    <MapContext.Provider value={mapInfo}>{props.children}</MapContext.Provider>
  );
}

export { MapContext, MapInfoContext };
