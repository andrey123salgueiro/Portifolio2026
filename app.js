import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    setCount(count + 1);
    setBgColor(randomColor());
  };

  const handleReset = () => {
    setCount(0);
    setBgColor("#ffffff");
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Mini Jogo de Clique</Text>
      <Text style={styles.counter}>Pontos: {count}</Text>
      <View style={styles.buttons}>
        <Button title="Clique!" onPress={handleClick} />
        <Button title="Resetar" onPress={handleReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
