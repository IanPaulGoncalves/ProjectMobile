import React, { useState } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import { Text, IconButton, Avatar } from "react-native-paper";
import { styles } from "./style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "../../config/config.json";

import { useDispatch } from "react-redux";

import { setSearch } from "../../store/SearchMap/SearchMap.actions";

function Search(props: any) {
  const [showState, setState] = useState({
    origin: {
      lat: 0,
      lng: 0,
    },
    destiny: {
      lat: 0,
      lng: 0,
    },
    priceKm: "",
  });

  const searchMapDispatch = useDispatch();

  function setValueState(name: string, value: any) {
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              ...styles.fontBold,
              fontSize: 45,
              padding: 15,
              marginBottom: 30,
            }}
          >
            Nome da Empresa
          </Text>
          <Avatar.Icon
            size={80}
            icon="motorbike"
            style={{
              backgroundColor: "transparent",
            }}
          />
        </View>

        <View style={styles.width100}>
          <View style={{ width: "100%", padding: 20 }}>
            <View style={{ width: "100%" }}>
              <GooglePlacesAutocomplete
                placeholder="Origem"
                onPress={(data, details = null) => {
                  const getLocation = details?.geometry;
                  if (getLocation !== undefined) {
                    setValueState("origin", {
                      ...showState.origin,
                      lat: getLocation.location.lat,
                      lng: getLocation.location.lng,
                    });
                  }
                }}
                query={{
                  key: config.API_KEY,
                  language: "pt-BR",
                }}
                enablePoweredByContainer={false}
                fetchDetails
                styles={{
                  listView: {
                    height: 300,
                    position: "absolute",
                    paddingTop: 40,
                    zIndex: 1400,
                  },
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              width: "100%",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 80,
            }}
          >
            <Avatar.Icon
              size={80}
              icon="arrow-down"
              style={{
                backgroundColor: "transparent",
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View style={{ width: "100%" }}>
              <GooglePlacesAutocomplete
                placeholder="Destino"
                onPress={(data, details = null) => {
                  const getLocation = details?.geometry;
                  if (getLocation !== undefined) {
                    setValueState("destiny", {
                      ...showState.destiny,
                      lat: getLocation.location.lat,
                      lng: getLocation.location.lng,
                    });
                  }
                }}
                query={{
                  key: config.API_KEY,
                  language: "pt-BR",
                }}
                enablePoweredByContainer={false}
                fetchDetails
                styles={{
                  listView: {
                    height: 300,
                    position: "absolute",
                    paddingTop: 40,
                    zIndex: 1400,
                  },
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 65,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: 46,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholder="Valor por km"
              value={showState.priceKm}
              onChangeText={(text) =>
                setValueState("priceKm", text.replace(/[^0-9\.]+/g, ""))
              }
            />
          </View>
          <View
            style={{
              display: "flex",
              width: "100%",
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              icon="arrow-right"
              onPress={() => {
                if (
                  showState.origin.lat !== 0 &&
                  showState.origin.lng !== 0 &&
                  showState.destiny.lat !== 0 &&
                  showState.destiny.lng !== 0 &&
                  showState.priceKm !== ""
                ) {
                  props.navigation.navigate("Maps", {
                    route: {
                      latOrigin: showState.origin.lat,
                      lngOrigin: showState.origin.lng,
                      latDestination: showState.destiny.lat,
                      lngDestination: showState.destiny.lng,
                      price: showState.priceKm,
                    },
                  });
                  searchMapDispatch(
                    setSearch(showState.origin, showState.destiny)
                  );
                } else {
                  console.log("opa");
                }
              }}
              size={50}
              style={{ backgroundColor: "#FFF" }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Search;
