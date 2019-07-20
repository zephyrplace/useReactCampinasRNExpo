import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import WelcomeLogo from '../assets/bem_vindo.png'
export default function Welcome () {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: '#f7f9fc', paddingHorizontal: 30 }}>
      <Image source={WelcomeLogo} resizeMode='contain' style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
      <Text style={{ fontSize: 40, alignSelf: 'center', fontWeight: 'bold' }}>Bem-vindo</Text>
      <Text style={{ fontSize: 20, alignSelf: 'center', textAlign: 'center' }}>Antes de começarmos, precisamos configurar o seu cartão para a sua segurança.</Text>
      <TouchableOpacity style={{ width: '100%', borderRadius: 7, justifyContent: 'center', alignItems: 'center', minHeight: 48, backgroundColor: '#0285ca' }}>
        <Text style={{ color: `white`, fontSize: 20 }}>vamos lá</Text>
      </TouchableOpacity>
    </View>
  )
}
