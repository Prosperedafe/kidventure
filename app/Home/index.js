import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT } from '../../constants/theme'

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kidventure, Prosper</Text>
      <Text style={styles.lowerText}>It's nice having you here Sir. Care for a drink?</Text>
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
