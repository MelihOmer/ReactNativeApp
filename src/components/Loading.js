import { StyleSheet, Text, View,ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable style={[{},styles.closeButtonContainer]}
            onPress={()=>changeIsLoading()}
        >
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
        
        <ActivityIndicator 
            size={'large'}
            color={'black'}
        ></ActivityIndicator>
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loginText:{
        fontWeight:'bold',
        fontSize:16
    },
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'gray',
        opacity:0.95,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    closeButton:{
        fontWeight:'bold',
        color:'white',
        fontSize:16
    },
    closeButtonContainer:{
        backgroundColor:'black',
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        position:'absolute',
        top:50,
        right:7
        
    }

})