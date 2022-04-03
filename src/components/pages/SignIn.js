import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';

export default function SignIn() {

   const navigation = useNavigation();
   const handleLogin = () => {navigation.navigate("Login")};
   const handleRegister = () => {navigation.navigate("Register")};

  return (
    <SafeAreaView>
        <Button title="Login " onPress={handleLogin}/>
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
