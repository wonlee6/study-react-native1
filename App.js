import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView
} from "react-native"

export default function App() {
  const [input, setInput] = useState("")
  const [goals, setGoals] = useState([])

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={(e) => setInput(e)}
          style={styles.textInput}
          placeholder="your course goal"
        />
        <Button
          title="Tab me!"
          onPress={() =>
            setGoals([...goals, { text: input, id: Math.random().toString() }])
          }
        />
      </View>
      <View style={styles.goalContainer}>
        {/* <ScrollView>
          {goals.map((i, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText }>
                {i}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={goals}
          renderItem={(item) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8
  },
  goalContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  goalText: {
    color: "white"
  }
})
