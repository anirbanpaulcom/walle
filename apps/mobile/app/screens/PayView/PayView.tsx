import React from 'react';
import {useColorScheme, StatusBar, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import BoxView from '../../components/BoxView/BoxView';
import CircularProgress from '../../components/Chart/CircularProgress';
import Row from '../../components/Wrapper/Row';
import {Category, expensesCategories} from '../../constains/catagories';
import ModalComponent from '../../components/ModalView/ModelView';
import {getColor} from '../../functions/functions';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const PayScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = React.useState(false);
  const [item, setItem] = React.useState<Category | undefined>(undefined);
  const [items, setItems] = React.useState<Category[]>(expensesCategories);
  const user = useSelector((state: RootState) => state.user);
  const totalBalance = user.balance.reduce(
    (sum, category) => sum + category.amount,
    0,
  );

  React.useEffect(() => {
    const updatedCategories = expensesCategories.map(category => {
      const totalAmount = user.transactions
        .filter(
          transaction =>
            transaction.category.toLowerCase() === category.type.toLowerCase(),
        )
        .reduce((sum, transaction) => sum + transaction.amount, 0);
      return {...category, amount: totalAmount};
    });
    setItems(updatedCategories);
  }, [user.transactions]);

  const colorMode = {
    backgroundColor: sharedColors.lightMode.backgroundColor,
    textColor: sharedColors.lightMode.textColor,
  };

  const handleItemPress = (selectedItem: Category) => {
    setModalVisible(true);
    setItem(selectedItem);
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colorMode.backgroundColor}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Row style={styles.row}>
        <BoxView amount={totalBalance} type="Day" size="sm" />
        <BoxView amount={totalBalance} type="Week" size="sm" />
        <BoxView amount={totalBalance} type="Month" size="sm" />
      </Row>
      <CircularProgress data={items} />

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <BoxView
            key={item.id}
            color={getColor(item.type)}
            onPress={() => handleItemPress(item)}
            size={'sm'}
            type={item.type}
            amount={item.amount}
          />
        )}
        contentContainerStyle={styles.flatListContainer}
      />
      {item && (
        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          type={'expense'}
          method={'cash'}
          category={item.type}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 50,
  },
  row: {
    justifyContent: 'space-between',
  },
  flatListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default PayScreen;
