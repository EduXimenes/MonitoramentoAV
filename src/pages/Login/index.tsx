import React, {useState, useEffect} from "react";
import { firebase, auth } from "../../services/firebase"
import { 
  View,
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Button,
  StyleSheet,
  Animated,
  Keyboard,
  Alert
  } from "react-native";
import {} from "react-native/Libraries/Animated/Easing";
import { RootStackParamsList } from "./../../../App"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";

type loginScreenProp = StackNavigationProp<RootStackParamsList, "Login">
const Login: React.FC = () =>{
    const navigation = useNavigation<loginScreenProp>()
        
    const loginFirebase = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        navigation.navigate('Home')
        
      })
      .catch((error) =>{
        setErrorLogin("true")
        let errorCode = error.code;
        let errorMessage = error.message;
      })
    }
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 200, y: 230}));

  //UseEffect executa quando um componente é montado
  useEffect(()=> { 
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //função para animar com teclado aberto
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide); //função para animar com teclado fechado
    
    Animated.parallel([
//duas animações em paralelo, spring responsavel por subir de baixo para cima o container de Login e timing para dar efeito de opacidade
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,  
      })
    ]).start();
    
  }, []);
  
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 120,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 230,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }

    return (
           //keyboard empurra os componentes para cima
    <KeyboardAvoidingView 
    style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style={{
          width: logo.x,
          height: logo.y,
        }}
        source={require('../../assets/frangologo1.png')}
        />
      </View>

      <Animated.View
       style={[
         styles.container,
         {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
         }
         ]}>

      <TextInput style={styles.input}
        placeholder="Email"
        onChangeText={(text)=> setEmail(text)}
        value={email}
        />

        <TextInput style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text)=> setPassword(text)}
        value={password}
        />
        {errorLogin === "true" 
        ?
            Alert.alert("Login Invalido", "Usuário ou senha errados.")
        :
        <View>
          <Text> Deu bom</Text>
        </View>
        }
        {email === "" || password === ""
        ?
        <TouchableOpacity 
        disabled={true}
        style={styles.btnSubmit}>
          <Text style={styles.textSubmit} >Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity 
        onPress={loginFirebase}
        style={styles.btnSubmit}>
          <Text style={styles.textSubmit} >Login</Text>
        </TouchableOpacity>
        }
        
      </Animated.View>
    </KeyboardAvoidingView>
  )

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    marginTop: 40,
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    width: '90%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
    input:{
      backgroundColor: 'white',
      width: '90%',
      marginBottom: 15,
      color: 'black',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    btnSubmit: {
      width: '60%',
      height: 45,
      backgroundColor: '#35AFFF',
      alignItems: 'center',
      justifyContent: 'center', 
      borderRadius: 50,
    },
    contentAlert:{

    },
    alertLogin:{
      color: '#FFF',
      fontSize: 18,
    },
    textSubmit: {
      color: '#FFF',
      fontSize: 18,

    }
})

export default Login;