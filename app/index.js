import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT } from '../constants/theme'

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kidventure, Prosper</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: '5%',
    backgroundColor: COLORS.primary,
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONT.DosisSemiBold,
    textAlign: 'center'
  }
})