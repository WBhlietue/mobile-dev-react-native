import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export function Lab71() {
  const style = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#aa00aa',
      fontSize: 40,
    },
  });
  return (
    <View style={style.main}>
      <Text style={style.text}>HI</Text>
    </View>
  );
}

export function Lab72() {
  const [stText, setStText] = useState(
    "'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod temp" +
      'or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex' +
      'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo' +
      'r in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep' +
      'teur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani' +
      "m id est laborum.'",
  );
  return (
    <View>
      <Text
        onPress={() => {
          setStText('HI, it was changed');
        }}>
        {stText}
      </Text>
    </View>
  );
}

export function Lab73() {
  const [stText, setStText] = useState(
    "'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod temp" +
      'or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex' +
      'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo' +
      'r in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep' +
      'teur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ani' +
      "m id est laborum.'",
  );
  function updateState (){
    setStText("hi, this was changed")
  }
  return (
    <View>
      <ShowText myState={stText} updateState={updateState} />
    </View>
  );
}

function ShowText(props) {
    return <View>
        <Text onPress={() => {
            props.updateState()
        }}>
            {props.myState}
        </Text>
    </View>
}
