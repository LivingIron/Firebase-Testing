
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../components/pages/SignIn';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

enableScreens();
const Stack = createNativeStackNavigator();


export default function Routing() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Sign In" component={SignIn}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
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
