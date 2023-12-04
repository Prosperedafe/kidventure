import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT } from '../constants/theme'
import { Stack } from 'expo-router'

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
      options={{
        headerTitle: ""
      }}
      />
      <Text style={styles.text}>Welcome to Kidventure, Prosper</Text>
    </SafeAreaView>
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