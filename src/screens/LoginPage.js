import {  StyleSheet, Text, TextInput, View,Pressable,Image } from 'react-native';
import React,{useState} from 'react';
import Loading from '../components/Loading';

const LoginPage = ({navigation}) => {

  const[name,setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../../assets/images/login.png')}
      ></Image>

      <Text style={styles.welcome}>Welcome {result} </Text>
      <Text>Email</Text>
      <TextInput 
        inputMode='email'
        style={styles.textInputs}
        placeholder='Enter Your Email'
        onChangeText={setName}
        value={name}
      ></TextInput>

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textInputs}
        placeholder='Enter Your Password'
        onChangeText={setLastName}
        value={lastName}
      ></TextInput>

      <Pressable 
        onPress={()=>setIsLoading(true)}
        style={({pressed}) => [{
          backgroundColor: pressed ? 'blue' : 'lightblue'
        },styles.buttonStyle]} >

        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable 
        onPress={()=>navigation.navigate('SignUp')}
        style={({pressed}) => [{
          backgroundColor: pressed ? 'gray' : 'lightgray',
          marginTop:50
        },styles.signUpButton]} >

        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      {
        isLoading 
          ? <Loading 
              changeIsLoading={()=>setIsLoading(false)}/>
          :null
      }
      
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs:{
    borderWidth:1,
    width:'80%',
    height:40,
    borderRadius:10,
    marginVertical:10,
    textAlign:'center',
    fontWeight:'bold'
  },
  buttonStyle:{
    width:'80%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontWeight:'800',
    color:'black'
  },
  image:{
    width:150,
    height:150,
    marginBottom:40
  },
  welcome:{
    fontWeight:'bold',
    fontSize:26
  },
  signUpButton:{
    width:'30%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  }
});
