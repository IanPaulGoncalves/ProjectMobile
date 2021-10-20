import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { Text, IconButton, Avatar } from "react-native-paper";
import { styles } from "./style";

function Login(props: any) {
  const classes = styles;
  const [showState, setState] = useState({
    email: "",
    password: "",
  });
  function setValueState(name: string, value: any) {
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  }
  return (
    <SafeAreaView style={classes.containerSafe}>
      <View style={classes.container}>
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
        <View style={classes.width100}>
          <Avatar.Icon
            size={200}
            icon="account-key"
            style={{
              backgroundColor: "transparent",
            }}
          />
          <TextInput
            style={{
              backgroundColor: "#fff",
              height: 46,
              borderRadius: 5,
              paddingLeft: 10,
              width: "90%",
            }}
            placeholder="Email"
            value={showState.email}
            onChangeText={(text) => setValueState("email", text)}
          />
          <TextInput
            style={{
              backgroundColor: "#fff",
              height: 46,
              borderRadius: 5,
              paddingLeft: 10,
              width: "90%",
              marginTop: 20,
            }}
            placeholder="Senha"
            secureTextEntry
            value={showState.password}
            onChangeText={(text) => setValueState("password", text)}
          />
          <IconButton
            icon="arrow-right"
            onPress={() => {
              if (
                showState.email === "ian_paulo" &&
                showState.password === "123456"
              )
                props.navigation.navigate("Home");
            }}
            size={100}
            color="#FFF"
          />
        </View>
        {/* <View style={classes.width100}></View>
        <View style={classes.width100}></View> */}
      </View>
    </SafeAreaView>
  );
}

export default Login;
