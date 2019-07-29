import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import WelcomeLogo from '../assets/bem_vindo.png'
import Button from '../component/Button'
export default function Welcome ({ navigation, ...props }) {
  return (
    <View style={styles.viewContainer}>
      <Image source={WelcomeLogo} resizeMode='contain' style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
      <Text style={{ fontSize: 40, alignSelf: 'center', fontWeight: 'bold' }}>Bem-vindo</Text>
      <Text style={{ fontSize: 20, alignSelf: 'center', textAlign: 'center' }}>Antes de começarmos, precisamos configurar o seu cartão para a sua segurança.</Text>
      <Button title='vamos lá' navigateTo='Login' />
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: { flex: 1, justifyContent: 'space-around', backgroundColor: '#f7f9fc', paddingHorizontal: 30 }
})
