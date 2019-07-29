import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

function Button ({ title, navigation, navigateTo }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={{ width: '100%', borderRadius: 7, justifyContent: 'center', alignItems: 'center', minHeight: 48, backgroundColor: '#0285ca' }}>
      <Text style={{ color: `white`, fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default withNavigation(Button)
