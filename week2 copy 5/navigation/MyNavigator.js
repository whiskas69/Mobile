import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด
const MealsNavigator = createNativeStackNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <MealsNavigator.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        }}
      >
        <MealsNavigator.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories2",
          }}
        /><MealsNavigator.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <MealsNavigator.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => ({
            title: route.params.title
          })}
        />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}
