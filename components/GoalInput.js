import React, { useState } from 'react'
import { StyleSheet, Button, View, TextInput, Modal, Image } from 'react-native'

export default function GoalInput(props) {
  const [input, setInput] = useState('')

  return (
    <Modal visible={props.isVisibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          value={input}
          onChangeText={(e) => setInput(e)}
          style={styles.textInput}
          placeholder="your course goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Close"
              onPress={() => {
                props.onCloseModal()
              }}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                setInput('')
                props.onAddGoals(input)
              }}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
