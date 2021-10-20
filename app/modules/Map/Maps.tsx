import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import config from "../../config/config.json";

function Maps(props: any) {
  const mapEL = useRef(null);
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(Number(props.route.params.route.price));

  const origin = {
    latitude: props.route.params.route.latOrigin,
    longitude: props.route.params.route.lngOrigin,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const destination = {
    latitude: props.route.params.route.latDestination,
    longitude: props.route.params.route.lngDestination,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        style={{ height: "80%", width: "100%" }}
        region={origin}
        showsUserLocation
        loadingEnabled
        ref={mapEL}
      >
        {props.route.params.route !== undefined && (
          <MapViewDirections
            lineDashPattern={[0]}
            origin={origin}
            destination={destination}
            apikey={config.API_KEY}
            strokeWidth={3}
            strokeColor="#222"
            onReady={(result) => {
              setDistance(result.distance);
              setPrice(result.distance * price);
              const mapRef = mapEL.current;
              if (mapRef) {
                mapRef.fitToCoordinates(result.coordinates, {
                  edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                  animated: true,
                });
              }
            }}
          />
        )}
      </MapView>
      <View style={{ width: "100%", height: "20%", backgroundColor: "#fff" }}>
        {distance !== 0 && price !== 0 && (
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#1F2D3D" }}
            >
              Distância:
            </Text>
            <Text style={{ fontSize: 25, color: "#1F2D3D" }}>
              {distance.toFixed(2).replace(".", ",")}Km
            </Text>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#1F2D3D" }}
            >
              Preço:
            </Text>
            <Text style={{ fontSize: 25, color: "#1F2D3D" }}>
              R$ {price.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Maps;
