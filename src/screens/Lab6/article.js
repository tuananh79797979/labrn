import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Article = ({ route, navigation }) => {
  const enteredText = route.params?.enteredText;
  const gotoHome = () => { navigation.navigate('Home') };
  const gotoChat = () => { navigation.navigate('Chat') };
  const gotoSetting = () => { navigation.navigate('Setting') };
  return (

    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: "auto", height: 100, }}>
        <Text style={{ alignContent: 'center', fontSize: 17, fontFamily: 'MuseoModerno-ExtraBoldItalic' }}>Chào bạn {enteredText}, tôi có thế giúp gì cho bạn </Text>


      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={gotoHome}>

          <Text style={{ color: '#fff', fontWeight: '900', fontSize: 17 }}>Go to Home</Text>

        </TouchableOpacity>
        {/**Chat */}
        <TouchableOpacity style={styles.button} onPress={gotoChat}>

          <Text style={{ color: '#fff', fontWeight: '900', fontSize: 17 }}>Go to Chat</Text>

        </TouchableOpacity>
        {/**Setting */}
        <TouchableOpacity style={styles.button} onPress={gotoSetting}>

          <Text style={{ color: '#fff', fontWeight: '900', fontSize: 17 }}>Go to Setting</Text>

        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#899B2C',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom:30
  }
})