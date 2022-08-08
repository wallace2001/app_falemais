import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FaleMais</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#F0F0F0',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});