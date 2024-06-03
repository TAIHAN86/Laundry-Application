import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../assets/thumbs.json")}
          style={styles.animation}
          autoPlay
          loop={false}
          speed={0.7}
        />
        <Text style={styles.text}>
          Your order has been placed
        </Text>
        <LottieView
          source={require("../assets/sparkle.json")}
          style={styles.sparkle}
          autoPlay
          loop={false}
          speed={0.7}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    height: 360,
    width: 300,
    marginTop: 40,
  },
  text: {
    marginTop: 40,
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
  },
  sparkle: {
    height: 300,
    position: "absolute",
    top: 100,
    width: 300,
  },
});
