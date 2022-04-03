
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';
import { writeUserData } from './src/config/firebaseConfig';
import Routing from "./src/config/Routing";

export default function App() {
  return (
    <NavigationContainer  style={styles.container}>
      <Routing />
    </NavigationContainer >
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
