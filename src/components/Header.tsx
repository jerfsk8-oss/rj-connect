import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📍 RJ_Connect </Text>

      <Text style={styles.title}>
        Bem-vindo!
      </Text>

      <Text style={styles.subtitle}>
        Tudo o que você precisa, perto de você.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#198acc",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
  },
});