import React, {useState} from 'react';
import {useColorScheme, StatusBar, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import {StyleSheet} from 'react-native';
import Container from '../../components/Wrapper/Container';
import TextView from '../../components/TextView/TextView';
import HorizontalFlatList from '../../components/ListView/ListHorizontal';
import VerticalFlatList from '../../components/ListView/ListVertical';
import SpaceBetweenRow from '../../components/Wrapper/SpaceBetweenRow';
import Row from '../../components/Wrapper/Row';
import {sharedStyles} from '../../constains/styles';
import classnames from 'tailwindcss-classnames';
import ButtonView from '../../components/ButtonView/buttonView';

const ExpenseScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedType, setSelectedType] = useState('Cash');

  const colorMode = {
    backgroundColor: isDarkMode
      ? sharedColors.lightMode.backgroundColor
      : sharedColors.darkMode.backgroundColor,
    textColor: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode.backgroundColor}
      />

      <Row style={{justifyContent: 'center', gap: 5}}>
        <ButtonView
          style={{width: '30%'}}
          title="Cash"
          type={selectedType === 'Cash' ? 'black' : 'gray'}
          onPress={() => setSelectedType('Cash')}
        />
        <ButtonView
          style={{width: '30%'}}
          title="Bank"
          type={selectedType === 'Bank' ? 'black' : 'gray'}
          onPress={() => setSelectedType('Bank')}
        />
      </Row>
      <View
        style={{
          color: 'black',
          backgroundColor: '#ffffff',
          width: '100%',
          display: 'flex',
        }}>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Total $32000
        </Text>
        <VerticalFlatList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    color: 'black',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 10,
  },
  flatList: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  title: {
    marginTop: 10,
  },
});

export default ExpenseScreen;
