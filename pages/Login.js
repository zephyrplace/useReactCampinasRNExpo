import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import LogoLogin from '../assets/full_logo_white.png'
import IconAdd from '../assets/icone_fechar.png'
export default function Welcome () {
  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-between' }}>
      <View style={{ backgroundColor: '#303e64', alignItems: 'center', justifyContent: 'center', height: '15%' }}>
        <Image source={LogoLogin} resizeMode='contain' style={{ marginTop: 20, width: '30%', height: undefined, aspectRatio: 1 }} />
      </View>
      <View style={{ alignItems: 'stretch', justifyContent: 'space-around', paddingHorizontal: 30, flex: 4 }}>
        <Text style={{ alignSelf: 'auto', fontWeight: 'bold', fontSize: 32 }}>Acesse sua conta BPP card</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput placeholder='número ou ID do cartão' style={{ width: '100%', height: 20, borderBottomWidth: 1, borderBottomColor: 'black' }} />
          <TouchableOpacity style={{ backgroundColor: '#0285ca', borderRadius: 50, width: 16, height: 16, justifyContent: 'center', alignItems: `center` }}>
            <Image source={IconAdd} style={{ aspectRatio: 1, width: `50%`, height: undefined }} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <TextInput placeholder='data de nascimento' style={{ width: '100%', height: 20, borderBottomWidth: 1, borderBottomColor: 'black' }} />

      </View>
      <View style={{ padding: 10 }}>
        <TouchableOpacity style={{ width: '100%', borderRadius: 7, justifyContent: 'center', alignItems: 'center', minHeight: 48, backgroundColor: '#0285ca' }}>
          <Text style={{ color: `white`, fontSize: 20 }}>acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
