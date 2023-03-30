import {StyleSheet, Text, View, Button} from 'react-native';

export function Lab81() {
  const style = StyleSheet.create({
    red: {
      color: '#ff0000',
    },
    bigBlue: {
      color: '#0000ff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
  return (
    <View>
      <Text style={style.red}>just red</Text>
      <Text style={style.bigBlue}>just bigBlue</Text>
      <Text style={[style.bigBlue, style.red]}>bigBlue, then red</Text>
      <Text style={[style.red, style.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
}
export function Lab82() {
  const style = StyleSheet.create({
    text: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  function TestText(props) {
    return (
      <View>
        <Text style={style.text}>{props.text}</Text>
      </View>
    );
  }
  return (
    <View>
      <TestText text="1123455543225" />
    </View>
  );
}
export function Lab83() {
  const style = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'column',
    },
    result: {
      flex: 2,
      backgroundColor: '#ff0000',
      justifyContent:"center",
      alignItems:"flex-end"
    },
    calculation: {
      flex: 2,
      backgroundColor: '#00aa00',
      justifyContent:"center",
      alignItems:"flex-end"
    },

    buttons: {
      flex: 7,
      flexDirection:"row"
    },
    number:{
        flex:3,
        backgroundColor:"#ffff00"
    },
    operators:{
        flex:1,
        backgroundColor:"#000000",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    resultText:{
        fontSize:40,
        color:"#ffffff",
    }
    ,
    row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }
  });
  return (
    <View style={style.main}>
      <View style = {style.result}>
      <Text style={style.resultText}>11*11</Text></View>
      <View style={style.calculation}>
        <Text style={style.resultText}>121</Text>
      </View>
      <View style ={style.buttons}>
        <View style={style.number}>
            <View style={style.row}>
                <Button title='0'/>
                <Button title='0'/>
                <Button title='0'/>
            </View>
            <View style={style.row}>
                <Button title='0'/>
                <Button title='0'/>
                <Button title='0'/>
            </View>
            <View style={style.row}>
                <Button title='0'/>
                <Button title='0'/>
                <Button title='0'/>
            </View>
            <View style={style.row}>
                <Button title='0'/>
                <Button title='0'/>
                <Button title='0'/>
            </View>
        </View>
        <View style={style.operators}>
            <Button title='+'/>
            <Button title='-'/>
            <Button title='*'/>
            <Button title='/'/>
        </View>
      </View>
    </View>
  );
}
export function Lab84() {}
