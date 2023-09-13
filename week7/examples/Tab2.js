import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, } from "react-native";

const Tab2 = (props) => {
  const animVal = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const animV2 = useRef(new Animated.Value(0)).current;

  const spin = animV2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const fadeSpin = () => {
    console.log("fade-spin");

    Animated.sequence([
      Animated.timing(animVal, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animVal, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(animV2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ 
          width: 200, height: 180, resizeMode: 'contain', opacity: animVal ,transform: [{ rotate: spin }]
        }}
        source={require("../assets/IT_Logo.png")}
      />

      <View style={styles.runSeq}>
        <Button title="RUN SEQUENCE" onPress={fadeSpin} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  runSeq:{
    backgroundColor: 'pink',
    width: '100%',
    marginBottom: -110
  }
});

export default Tab2;
