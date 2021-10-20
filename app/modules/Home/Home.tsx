import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text, IconButton, Avatar } from "react-native-paper";
import { styles } from "./style";

function Home(props: any) {
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
            Nome da Teste
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
          <View style={styles.containerArrow}>
            <IconButton
              icon="arrow-right"
              onPress={() => props.navigation.navigate("Search")}
              size={100}
              color="#FFF"
            />
          </View>
          <View style={styles.containerParagraph}>
            <Text
              style={{
                ...styles.fontBold,
                fontSize: 35,
                paddingLeft: 30,
                paddingRight: 30,
                textAlign: "center",
              }}
            >
              "VOCÊ ESCOLHE O LOCAL E NÓS FAZEMOS O RESTO"
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
