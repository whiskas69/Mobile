import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing,} from "react-native";

const Tab1 = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0

  const spring = () => {
    console.log("spring..");
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 10,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ 
          width: 180, height: 150, transform: [{ scale: springVal }] 
        }}
        source={require("../assets/IT_Logo.png")}
      />
      <View style={styles.spring}>
        <Button title="Spring" onPress={spring} />
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
  spring:{
    backgroundColor: 'pink',
    width: '100%',
    marginBottom: -110
  }
});

export default Tab1;
