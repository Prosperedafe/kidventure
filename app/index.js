import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kidventure</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: '5%'
  },
  text: {
    color: 'blue',
    // fontSize: '2rem'
  }
})