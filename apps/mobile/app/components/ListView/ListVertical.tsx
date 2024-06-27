import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import TextView from '../TextView/TextView';
import {Home, ShoppingCart, Music, BookOpen, Film} from 'lucide-react-native';

const categories = {
  Science: <BookOpen color="black" size={30} />,
  Technology: <Home color="black" size={30} />,
  Art: <Film color="black" size={30} />,
  Music: <Music color="black" size={30} />,
  Shopping: <ShoppingCart color="black" size={30} />,
};

const data = [
  {
    key: '1',
    category: 'Science',
    paymentType: 'Credit Card',
    expense: '$100',
    percentage: '21%',
  },
  {
    key: '2',
    category: 'Technology',
    paymentType: 'Cash',
    expense: '$50',
    percentage: '10%',
  },
  {
    key: '3',
    category: 'Art',
    paymentType: 'Debit Card',
    expense: '$70',
    percentage: '15%',
  },
  {
    key: '4',
    category: 'Music',
    paymentType: 'Credit Card',
    expense: '$30',
    percentage: '5%',
  },
  {
    key: '5',
    category: 'Shopping',
    paymentType: 'Cash',
    expense: '$200',
    percentage: '40%',
  },
];

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.iconContainer}>{categories[item.category]}</View>
    <View style={styles.textContainer}>
      <View style={styles.title}>
        <TextView type="smallBold" style={[styles.heading, {color: 'black'}]}>
          {item.category}
        </TextView>
        <TextView type="smallBold" style={[styles.heading, {color: 'black'}]}>
          {item.expense}
        </TextView>
      </View>
      <View style={styles.subtitle}>
        <TextView type="extraSmallLight" style={styles.subHeading}>
          {item.paymentType}
        </TextView>
        <TextView type="extraSmallLight" style={styles.subHeading}>
          {item.percentage}
        </TextView>
      </View>
    </View>
  </TouchableOpacity>
);

const VerticalFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  iconContainer: {
    flex: 0.1,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  textContainer: {
    flex: 0.75,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    marginTop: 5,
    textAlign: 'left',
    fontSize: 16,
  },
  subHeading: {
    textAlign: 'left',
    fontSize: 12,
    color: '#555',
  },
});

export default VerticalFlatList;
