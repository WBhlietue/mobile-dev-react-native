import {SearchBar} from '@rneui/base';
import {PricingCard} from '@rneui/themed';
import {useState} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {
  Text,
  NativeBaseProvider,
  HStack,
  Box,
  StatusBar,
  IconButton,
} from 'native-base';
import {Icon} from 'react-native-vector-icons/FontAwesome';

export function Lab91() {
  return (
    <View>
      <PricingCard
        color="#abcdef"
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
      />
    </View>
  );
}
export function Lab92() {
  const [search, setSearch] = useState('');
  function UpdateSearchText(text) {
    setSearch(text);
  }
  return (
    <View>
      <SearchBar
        placeholder="enter some text"
        onChangeText={UpdateSearchText}
        value={search}
        lightTheme
      />
    </View>
  );
}
export function Lab93() {
  return (
    <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            colorScheme="indigo"
            key={variant}
            variant={variant}
            _icon={{
              as: AntDesign,
              name: 'search1',
            }}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </NativeBaseProvider>
  );
}
export function Lab94() {
  return <View></View>;
}
export function Lab95() {
  return <View></View>;
}
export function Lab96() {
  return <View></View>;
}
