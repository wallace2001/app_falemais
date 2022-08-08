import { Image, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { Logo } from "../components/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGE_URL } from "../constants/Urls";
import { HOME_INFOS } from "../constants/Layout";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <ScrollView style={styles.content}>
        <Image source={{ uri: IMAGE_URL }} style={styles.image} />

        {HOME_INFOS.map((info) => (
          <View key={info.id} style={styles.textContent}>
            <Text style={styles.asterisk}>*</Text>
            <Text style={styles.text}>{info.message}</Text>
          </View>
        ))}

        <Text style={styles.description}>
          Aqui na falemais você pode falar a vontade, principalmente contratando
          nossos planos Aqui na falemais você pode falar a vontade,
          principalmente contratando nossos planos Aqui na falemais você pode
          falar a vontade, principalmente contratando nossos planos
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  header: {
    width: "100%",
    marginTop: 10,
    marginHorizontal: 20,
  },
  content: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 30,
    borderRadius: 20,
  },
  textContent: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#565656",
    marginTop: 10,
    marginLeft: 10,
  },
  asterisk: {
    fontSize: 20,
    color: "red",
    marginTop: 16,
  },
  description: {
    marginTop: 60,
    textAlign: 'center', 
    color: "#565656",
  },
});
