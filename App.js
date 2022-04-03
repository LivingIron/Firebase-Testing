
import { StyleSheet, SafeAreaView,TextInput ,Button } from 'react-native';
import { writeUserData } from './src/config/firebaseConfig';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Enter your email' />
      <TextInput placeholder='Enter your password'/>
      <Button title='Login' onPress={writeUserData("Adasdwadsad","Peter","yes@gmail.com")}/>
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
