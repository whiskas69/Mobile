import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Example03 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });

      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
      
    ),


    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },


  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box, { transform: [{ scale: scale }] }]}
        source={require("../assets/IT_Logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150, 
    height: 120,
  },
});

export default Example03;
