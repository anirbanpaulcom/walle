import React from 'react';
import {
  useColorScheme,
  StatusBar,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import BoxView from '../../components/BoxView/BoxView';
import ModalComponent from '../../components/ModalView/ModelView';
import {Category} from '../../constains/catagories';
import Container from '../../components/Wrapper/Container';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {getColor} from '../../functions/functions';

const IncomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = React.useState(false);
  const [item, setItem] = React.useState<Category | undefined>(undefined);
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

  const handcategoryPress = (selectedItem: Category) => {
    setModalVisible(true);
    setItem(selectedItem);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Container style={styles.totalBalanceContainer}>
        <Text style={styles.totalBalanceLabel}>Total Balance</Text>
        <Text style={styles.totalBalanceAmount}>
          <Text style={styles.currencySymbol}>$</Text> {totalBalance}
        </Text>
      </Container>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {user.balance.map(category => (
          <BoxView
            key={category.type}
            color={getColor(category.type)}
            onPress={() => handcategoryPress(category)}
            size={'lg'}
            type={category.type}
            amount={category.amount}
          />
        ))}
      </ScrollView>
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type={'income'}
        method={item?.type}
        category={'salary'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  totalBalanceContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    marginBottom: 60,
    height: '33%',
  },
  totalBalanceLabel: {
    color: 'black',
    textAlign: 'center',
  },
  totalBalanceAmount: {
    fontSize: 50,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  currencySymbol: {
    fontSize: 40,
    color: 'gray',
    fontWeight: '300',
  },
  scrollViewContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 600,
  },
});

export default IncomeScreen;
