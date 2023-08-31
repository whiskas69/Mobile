import React, { useState } from "react";
import { FlatList } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
export default function Example01() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
      <TextInput
        placeholder="เพิ่มข้อความที่นี่..."
        style={styles.input}
        value={text}
        onChangeText={(input) => {
            setText(input);
        }}
      />
      <View style={styles.save}>
        <Button title="บันทึก" 
        onPress={() => { setArray([...array, text]), setText("")}}
        />
        
      </View>
      {/* แสดงข้อความ */}
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <View style={styles.outputcontainer}>
            <Text style={styles.outputtext}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  outputtext: {
    fontSize: 20,
  },
  btncontainer: {
    backgroundColor: "#d0efff",
    width: "70%",
  },
  outputcontainer: {
    marginVertical: 10,
  },
  save:{
    width: '70%',
    marginBottom: 12,
  },
});