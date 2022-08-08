import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EditScreenInfo from "../components/EditScreenInfo";
import { Logo } from "../components/Logo";
import { Text, View } from "../components/Themed";
import { PLANS_INFOS } from "../constants/Layout";

export default function Plans() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Planos</Text>

        {PLANS_INFOS.map(info => (
          <View style={styles.contentPlan}>
            <Text style={styles.titlePlan}>{info.title}</Text>
            <Text style={styles.descriptionPlan}>{info.message}</Text>
          </View>
        ))}
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
  title: {
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentPlan: {
    backgroundColor: "#F0F0F0",
    marginTop: 40,
  },
  titlePlan: {
    fontSize: 20,
    color: '#181818',
  },
  descriptionPlan: {
    color: "#6B6B6B",
    marginTop: 10,
  },
});
