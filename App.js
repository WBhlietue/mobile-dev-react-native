import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import {Lab71, Lab72, Lab73} from './Res/Lab7';
import {Lab81, Lab82, Lab83} from './Res/Lab8';
import { Lab91, Lab92, Lab93, Lab94, Lab95, Lab96 } from './Res/Lab9';

const stack = createNativeStackNavigator();

function Home({navigation}) {
  const style = StyleSheet.create({
    btns: {
      margin: 10,
      backgroundColor: '#9999ff',
      height: 50,
      alignItems: 'center',
      borderRadius: 30,
    },
    text: {
      fontSize: 40,
      color: '#ffffff',
    },
  });
  const pageNames = ['7-1', '7-2', '7-3', '8-1', '8-2', '8-3', '9-1', '9-2', '9-3', '9-4', '9-5', '9-6'];
  let btns = [];
  for (let i = 0; i < pageNames.length; i++) {
    btns.push(
      <TouchableOpacity
      key= {i}
        style={style.btns}
        onPress={() => {
          navigation.navigate(pageNames[i], {name: pageNames[i]});
        }}>
        <Text style={style.text}>{'Lab ' + pageNames[i]}</Text>
      </TouchableOpacity>,
    );
  }
  return <ScrollView>{btns}</ScrollView>;
}

function App() {
  const style = StyleSheet.create({
    body: {
      margin: 0,
    },
  });
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{contentStyle: style.body}} >
        <stack.Screen name="Home" component={Home} options={{title: 'Home'}}  />
        <stack.Screen name="7-1" component={Lab71} />
        <stack.Screen name="7-2" component={Lab72} />
        <stack.Screen name="7-3" component={Lab73} />
        <stack.Screen name="8-1" component={Lab81} />
        <stack.Screen name="8-2" component={Lab82} />
        <stack.Screen name="8-3" component={Lab83} />
        <stack.Screen name="9-1" component={Lab91} />
        <stack.Screen name="9-2" component={Lab92} />
        <stack.Screen name="9-3" component={Lab93} />
        <stack.Screen name="9-4" component={Lab94} />
        <stack.Screen name="9-5" component={Lab95} />
        <stack.Screen name="9-6" component={Lab96} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
