import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TodoList}
            options={{ title: "Todo List" }}
          />
          <Stack.Screen
            name="Todo"
            component={Todo}
            options={{ title: "Todo Info" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="#ffffff" style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
