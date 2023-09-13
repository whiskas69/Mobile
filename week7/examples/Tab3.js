import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, } from "react-native";

const Tab3 = (props) => {
  const animVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  const animVal2 = useRef(new Animated.Value(0)).current;
  
  const movingMargin = animVal2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 50, 0],
  });

  const parallel = () => {
    console.log("parallel");

    Animated.parallel([
      Animated.spring(animVal, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animVal2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animVal.setValue(0.3);
      animVal2.setValue(0);
    });
  };

  return (
    <View style={styles.container}>

      <Animated.Image
        style={{
          width: 200, height: 180, resizeMode: 'contain',
          transform: [{ scale: animVal }]
        }}
        source={require("../assets/IT_Logo.png")}
      />

      <Animated.View
        style={{ transform: [{ translateX: movingMargin }] }}
      >
        <Text style={{ color: "orange", fontSize:25, top:-80 }}>Welcome to Faculty of IT!!</Text>
      </Animated.View>

      <View style={styles.runPar}>
        <Button title="RUN PARALLEL" onPress={parallel} />
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
  runPar: {
    backgroundColor: 'pink',
    width: '100%',
    marginBottom: -50
  }
});

export default Tab3;
