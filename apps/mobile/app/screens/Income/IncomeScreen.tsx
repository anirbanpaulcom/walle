import React from 'react';
import {useColorScheme, StatusBar, View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import {StyleSheet} from 'react-native';
import BoxView from '../../components/BoxView/BoxView';
import ModalComponent from '../../components/ModalView/ModelView';
import {
  balanceCategories,
} from '../../constains/catagories';

const IncomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = React.useState(true);

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
      <View
        style={{
          color: 'black',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 60,
        }}>
        <Text>Total Balance</Text>
        <Text
          style={{
            fontSize: 50,
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: 'gray',
              fontWeight: '300',
            }}>
            $
          </Text>
          32000
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{display: 'flex', flexWrap: 'wrap',justifyContent:'center', flexDirection:'row'}}
        >
        {balanceCategories.map(category => (
          <BoxView
            key={category.type}
            color={category.color}
            onPress={() => setModalVisible(true)}
            size={'lg'}
            type={category.type}
            amount={category.amount}
          />
        ))}
      </ScrollView>
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    color: 'black',
    backgroundColor: '#ffffff',
    marginBottom: '10%',
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

export default IncomeScreen;
