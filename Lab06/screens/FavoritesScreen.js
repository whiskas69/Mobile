import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";


const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m4");

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MealList
      listData={favMeals}
      navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
