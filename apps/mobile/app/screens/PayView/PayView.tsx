import React from 'react';
import {
  useColorScheme,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import BoxView from '../../components/BoxView/BoxView';
import CircularProgress from '../../components/Chart/CircularProgress';
import Row from '../../components/Wrapper/Row';
import ButtonView from '../../components/ButtonView/buttonView';
import {expensesCategories} from '../../constains/catagories';

const PayScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const colorMode = {
    backgroundColor: isDarkMode
      ? sharedColors.lightMode.backgroundColor
      : sharedColors.darkMode.backgroundColor,
    textColor: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Row style={{display: 'flex', justifyContent: 'space-between'}}>
        <ButtonView
          style={{width: '30%', height: 100}}
          title="Day $100"
          type="gray"></ButtonView>
        <ButtonView
          style={{width: '30%', height: 100}}
          title="Week $100"
          type="gray"
        />
        <ButtonView
          style={{width: '30%', height: 100}}
          title="Monthly $100"
          type="gray"
        />
      </Row>
      <CircularProgress data={expensesCategories} />

      <FlatList
        data={expensesCategories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BoxView
            key={item.id}
            color={item.color}
            size={'sm'}
            type={item.type}
            amount={item.amount}
          />
        )}
        contentContainerStyle={{
          backgroundColor: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: '15%',
  },
});

export default PayScreen;
