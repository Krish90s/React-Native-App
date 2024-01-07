import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default Todo = ({ navigation, route }) => {
  const [todo, setTodo] = useState(null);

  const fetchTodos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${route.params.id}`
    );
    const json = await response.json();
    setTodo(json);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!todo) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>ID : {todo.id}</Text>
      <Text style={styles.cardText}>Title: {todo.title}</Text>
      <View style={styles.buttonContainer}>
        <Button color="#000000" title="Click" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: "#f1c40f",
    borderRadius: 25,
  },
  cardText: {
    fontSize: 20,
    color: "#000000",
  },
  buttonContainer: {
    marginTop: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
});
