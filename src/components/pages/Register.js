import React,{useState} from "react";
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';
import {createUser} from "../../config/firebaseConfig";

export default function Register() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleRegister = () =>{
        console.log(email);
        console.log(password);
        createUser(email,password);
    }

  return (
      
    <SafeAreaView>
        <TextInput placeholder='Enter email' onChangeText={newText => setEmail(newText)}/>
        <TextInput placeholder='Enter password' onChangeText={newText => setPassword(newText)}/>
        <Button title="Register" onPress={handleRegister}/>
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
