import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./code_for_students/components/Header";
import GameOverScreen from "./code_for_students/screens/GameOverScreen";
import GameScreen from "./code_for_students/screens/GameScreen";
import StartGameScreen from "./code_for_students/screens/StartGameScreen";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState(0); //ตัวแปร , function 
  const [guessRounds, setGuessRounds] = useState(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  const configureNewGameHandler = () => {
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ให้เป็น 0
    // ...เพิ่มโค้ด...อัพเดทค่าสเตท correctNumber ให้เป็น 0
    setGuessRounds(0);
    setCorrectNumber(0);
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
  };

  // ฟังก์ชันสำหรับจัดการการจบเกม
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />; //onStartGame รับค่าแรนด้อมจากลูกคลาส StartGameScreen ไปเซตใน startGameHandler

  if (correctNumber > 0 && guessRounds <= 0) {
    // ทำการเรียก GameScreen
    content = (
      <GameScreen onGameOver={gameOverHandler} answer={correctNumber}/>
    );
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverScreen
    content = (
      <GameOverScreen rounds={guessRounds} answer={correctNumber} onRestart={configureNewGameHandler} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
