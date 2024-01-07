import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default TodoList = ({ navigation }) => {
  const [menus, setMenus] = useState(null);

  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setMenus(json);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <FlatList
      data={menus}
      renderItem={({ item }) => (
        <Item
          onPress={() => navigation.navigate("Todo", { id: item.id })}
          title={item.title}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  statusbar: {
    height: "5rem",
  },
  item: {
    backgroundColor: "#f1c40f",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
