import React , {useState} from "react"
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';
import { loginUser } from '../../config/firebaseConfig';

export default function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const handleLogin = () =>{
        loginUser(email,pass);
    }

  return (

    <SafeAreaView>
        <TextInput placeholder='Enter email' onChangeText={newText => setEmail(newText)}/>
        <TextInput placeholder='Enter password' onChangeText={newText =>setPass(newText)}/>
        <Button title="Login" onPress={handleLogin}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
