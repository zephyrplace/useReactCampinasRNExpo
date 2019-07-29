import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import LogoDashboard from '../assets/full_logo_white.png'
import Mostrar from '../assets/icone_mostrar.png'
export default function Dashboard () {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={LogoDashboard} resizeMode='contain' style={style.headerLogoDash} />
        <View style={{ justifyContent: `flex-start`, width: `90%` }}>
          <View>
            <Text style={{ color: `white`, fontSize: 12 }}>
            Saldo cartão 0301
            </Text>
          </View>

          {/* Valor */}
          <View style={{ flexDirection: `row`, justifyContent: `space-between`, width: `90%`, alignItems: `center` }}>
            <Text style={{ color: `#10e082`, fontWeight: `bold`, fontSize: 32 }}>
            R$ 350,00
            </Text>
            <Image source={Mostrar} resizeMode='contain' style={{ marginTop: 20, width: 20, height: undefined, aspectRatio: 1 }} />
          </View>
        </View>
        <TouchableOpacity><Text style={{ color: `white`, fontWeight: `bold` }}>V</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: `row`, justifyContent: `space-around`, marginBottom: 10, padding: 8, borderBottomWidth: 1 }}>
        <TouchableOpacity><Text>tudo</Text></TouchableOpacity>
        <TouchableOpacity><Text>entrada</Text></TouchableOpacity>
        <TouchableOpacity><Text>saida</Text></TouchableOpacity>
      </View>

      <View style={{ padding: 10 }}>
        <View style={{ width: `100%` }}>
          <TextInput placeholder={`extrato cartao`} />
        </View>
      </View>
      <View style={{ padding: 5, marginLeft: 10, paddingLeft: 10 }}>

        {/* Bolinha */}

        <View style={style.expense}>
          <View style={{ flexDirection: `row`, alignItems: `center` }}>
            <View style={{ marginRight: 5, marginLeft: -4, height: 10, width: 10, borderWidth: 1, borderColor: `#303e64`, borderRadius: 50 }} />
            <Text style={{ color: `#84888c` }}>Emporio restarurante</Text>
          </View>
          <Text>08:00</Text>
        </View>

        <View style={style.historyBorder}>
          <Text>- R$ 100.000,00</Text>
        </View>
        <View style={style.expense}>
          <Text style={{ color: `#84888c` }}>Almoço no trabalho</Text>
          <Text>21/10</Text>
        </View>
        <View style={style.historyBorder}>
          <Text>- R$ 23,30</Text>
        </View>
        <View style={style.expense}>
          <Text style={{ color: `#84888c` }}>Carga no cartão</Text>
          <Text>21/10</Text>
        </View>
        <View style={style.historyBorder}>
          <Text >R$ 1.000,00</Text>
        </View>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    backgroundColor: '#303e64',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '30%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  headerLogoDash: {
    marginTop: 20,
    width: '20%',
    height: undefined,
    aspectRatio: 1
  },
  historyBorder: {
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: `#7f7a7a`,
    paddingBottom: 10
  },
  expense: {
    flexDirection: `row`,
    justifyContent: 'space-between'
  }

})
