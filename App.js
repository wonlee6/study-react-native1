import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [goals, setGoals] = useState([])

  const handleAddGoals = (input) => {
    setGoals([...goals, { text: input, id: Math.random().toString() }])
    setIsVisibleModal(false)
  }

  const handleDeleteGoals = (id) => {
    setGoals((prev) => prev.filter((i) => i.id !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setIsVisibleModal(true)}
        />
        <GoalInput
          isVisibleModal={isVisibleModal}
          onAddGoals={handleAddGoals}
          onCloseModal={() => setIsVisibleModal(false)}
        />
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
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoals={handleDeleteGoals}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalContainer: {
    flex: 4
  }
})
