import React, {useState} from 'react';
import {useColorScheme, StatusBar, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import VerticalFlatList from '../../components/ListView/ListVertical';
import Row from '../../components/Wrapper/Row';
import TextView from '../../components/TextView/TextView';
import ButtonView from '../../components/ButtonView/buttonView';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const ExpenseScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedType, setSelectedType] = useState('cash');
  const user = useSelector((state: RootState) => state.user);
  const totalBalance = user.balance.reduce(
    (sum, category) => sum + category.amount,
    0,
  );

  const colorMode = {
    backgroundColor: isDarkMode
      ? sharedColors.lightMode.backgroundColor
      : sharedColors.darkMode.backgroundColor,
    textColor: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode.backgroundColor}
      />

      <Row style={styles.row}>
        <ButtonView
          style={styles.button}
          title="Cash"
          type={selectedType === 'cash' ? 'black' : 'gray'}
          onPress={() => handleTypeChange('cash')}
        />
        <ButtonView
          style={styles.button}
          title="Bank"
          type={selectedType === 'Bank' ? 'black' : 'gray'}
          onPress={() => handleTypeChange('Bank')}
        />
      </Row>
      <View style={styles.content}>
        <TextView style={styles.totalText}>Total ${totalBalance}</TextView>
        {selectedType === 'Bank' && (
          <TextView style={styles.bankMessage}>
            Please connect your bank account to view transactions.
          </TextView>
        )}
        {selectedType == 'cash' && (
          <VerticalFlatList props={user.transactions} />
        )}
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
    backgroundColor: '#ffffff',
  },
  row: {
    justifyContent: 'center',
    gap: 5,
  },
  button: {
    width: '30%',
  },
  content: {
    width: '100%',
  },
  totalText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  bankMessage: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

export default ExpenseScreen;
