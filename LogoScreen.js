import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const LogoScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("MedicineList");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    <Image
    source={require('./assets/1-removebg-preview.png')}
    style={styles.additionalImage}
    resizeMode="contain"
  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default LogoScreen;
