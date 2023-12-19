import "expo-router/entry";

import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from "./app";

export default function index() {
  return (
    <View>
      <AppNavigation />
    </View>
  )
}


