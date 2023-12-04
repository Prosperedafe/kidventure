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
      <Text style={styles.lowerText}>It's nice having you here Sir. Care for a drink?</Text>
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
    fontSize: 32,
    fontFamily: FONT.DosisSemiBold,
    textAlign: 'center'
  },
  lowerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: FONT.FredokaOneRegular,
    textAlign: 'center',
    marginTop: 60,
    lineHeight: 30,
  }
})